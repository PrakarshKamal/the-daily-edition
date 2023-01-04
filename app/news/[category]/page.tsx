import React from "react";
import NewsList from "../../NewsList";
import fetchNews from "../../../utils/fetchNews";
import { categories } from "../../../constants";

type Props = {
  params: { category: Category };
};

async function NewsCategoryPage({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategoryPage;

// pre building local static pages based on the categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
