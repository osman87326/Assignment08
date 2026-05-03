"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://assignment08-psi.vercel.app/data.json");
      const books = await res.json();
      const foundBook = books.find((b) => b.id == id);
      setBook(foundBook);
    };

    fetchData();
  }, [id]);

  if (!book) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mt-5 mb-5 font-bold">Books Details</h1>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <Image
            src={book.image_url}
            alt={book.title}
            width={400}
            height={600}
          />

          <div>
            <h1 className="text-5xl font-bold">{book.title}</h1>

            <p className="py-4">
              <span className="text-xl font-bold">Author:</span> {book.author}
            </p>

            <p className="py-4">
              <span className="text-xl font-bold">Description:</span>{" "}
              {book.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;