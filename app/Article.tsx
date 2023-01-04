import React from "react";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: NewsArticle;
};

function Article({ article }: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-110 hover:shadow-lg hover:bg-slate-200 duration-200 transition-all ease-out">
      {article.image && (
        <img
          className="h-60 w-full rounded-t-lg object-cover shadow-md"
          src={article.image}
          alt={article.title}
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="flex-1 mt-2">
            <p className="text-cs line-clamp-3">{article.description}</p>
          </section>

          <footer className="text-xs text-right flex ml-auto pt-5 space-x-1 text-gray-400 italic">
            <p>{article.source} - </p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
