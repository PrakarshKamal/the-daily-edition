"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={(event) => handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
