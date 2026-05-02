import React from 'react';
import BookCard from './BookCard';

const FeaturedBook = async () => {
  let books = [];

  try {
    const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    books = await res.json();

  } catch (error) {
    console.error(error);
    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold">Featured Books</h1>
        <p className="text-red-500 mt-5">Failed to load books 😢</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold mt-5'>Featured Books</h1>  

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
        {
          books?.slice(0, 8).map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedBook;