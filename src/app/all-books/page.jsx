import BookCard from "@/components/BookCard";
import SearchBook from "@/components/SearchBook";
import React from "react";

const allBookPage = async () => {
  const res = await fetch(
    "https://assignment08-psi.vercel.app/data.json",
    {
      cache: "no-store", // optional but recommended
    }
  );

  const books = await res.json();

  return (
    <div className="container mx-auto px-4">
      
      {/* Header */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold mt-5">
          Featured Books
        </h1>

        {/* Search (optional) */}
        <SearchBook books={books} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {books.map((book) => (
          <BookCard key={book.id} book={book}> </BookCard>
        ))}
      </div>

    </div>
  );
};

export default allBookPage;