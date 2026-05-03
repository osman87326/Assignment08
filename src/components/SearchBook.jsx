'use client';

import React from "react";
import BookCard from "./BookCard";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBook = ({ books }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("search") || "";

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", e.target.value);
    router.push(`?${params.toString()}`);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          type="search"
          placeholder="Search books..."
          value={search}
          onChange={handleSearch}
        />
      </label>

      {/* Results */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBook;