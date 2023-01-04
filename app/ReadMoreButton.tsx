"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  article: NewsArticle;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleReadMoreClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    router.push(url);
  };

  return (
    <button
      className="bg-orange-400 rounded-b-lg h-10 hover:bg-orange-500 dark:text-gray-900"
      onClick={handleReadMoreClick}
    >
      Read more
    </button>
  );
}

export default ReadMoreButton;
