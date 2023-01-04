import { gql } from "graphql-request";
import sortByImage from "./sortByImage";

const fetchNews = async (
  category?: Category | string,
  keyword?: string,
  isDyanmic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $categories: String!
      $keywords: String
      $access_key: String!
    ) {
      newsQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          title
          source
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // fetch function with Next.js 13 caching
  const result = await fetch(
    "https://jena.stepzen.net/api/knotted-zebra/__graphql",
    {
      method: "POST",
      cache: isDyanmic ? "no-cache" : "default",
      next: isDyanmic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keyword,
        },
      }),
    }
  );

  const response = await result.json();

  // sort function by image vs not image present
  const news = sortByImage(response.data.newsQuery);

  // return sorted array
  return news;
};

export default fetchNews;

// http://api.mediastack.com/v1/news?access_key=9bdc4ffeb46beda00b47622ee5c2f5ee
