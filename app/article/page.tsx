import React from "react";
import { notFound } from "next/navigation";
import Article from "../Article";

type Props = {
  searchParams?: NewsArticle;
};

function ArticlePage({ searchParams }: Props) {
  //check for article page
  if (
    !searchParams ||
    (searchParams && Object.entries(searchParams).length === 0)
  ) {
    return notFound();
  }

  const article: NewsArticle = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row px-0 pb-24 lg:px-10">
        {article.image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl rounded-lg object-cover shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 pb-2 no-underline">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By: {article.author ? article.author : "Unknown"}
            </h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">{article.published_at}</p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
