import React from "react";
import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

async function Home() {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Home;
