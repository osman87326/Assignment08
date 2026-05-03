'use client';

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import BookCard from "./BookCard";

const SearchBook = ({ books }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("Search") || "";

  const handleSearch = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());
    params.set("Search", value);

    router.push(`?${params.toString()}`);
  };

  const filteredBooks = search
    ? books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    : books;

  return (
    <div className="w-full">
      
      {/* SEARCH BOX */}
      <label className="input flex items-center gap-2">
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
          defaultValue={search}
          onChange={handleSearch}
          className="w-full"
        />
      </label>

      {/* BOOK LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-gray-500 mt-4">No books found</p>
        )}
      </div>

    </div>
  );
};

export default SearchBook;