"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Asegúrate de tener react-icons instalado

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a word"
        className="w-full border p-4 pl-12 rounded"
      />
      <button
        type="submit"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <AiOutlineSearch size={24} />
      </button>
    </form>
  );
}
