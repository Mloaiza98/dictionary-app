"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; 

export default function Search({ onSearch, theme }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className= {`relative w-full mx-auto ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} text-${theme === "light" ? "black" : "white"}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a word"
        className={`w-full border p-4 pl-4 rounded-lg ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} text-${theme === "light" ? "black" : "white"}` }
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <AiOutlineSearch size={24} />
      </button>
    </form>
  );
}
