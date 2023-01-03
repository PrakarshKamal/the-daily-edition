import React from "react";
import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";

async function Home() {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div>{/* NewsList  */}</div>;
}

export default Home;
