
import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
  
  if (!book) return null;

  return (
    <div>
      <Card className="transition-transform duration-300 hover:scale-105 p-3">

        {/* Image */}
        <div className="relative w-full aspect-square">
          <Image
            src={book.image_url || "/images/fallback.jpg"} // ✅ fallback image
            fill
            alt={book.title || "Book Image"}
            className="object-cover rounded-xl"
          />

          {/* Category */}
          <Chip size="sm" className="absolute right-2 top-2">
            {book.category}
          </Chip>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mt-3">{book.title}</h2>

        {/* Author */}
        <p className="text-sm text-gray-500">{book.author}</p>

        <Separator className="my-2" />

        {/* Button */}
        <Link href={`/all-books/${book.id}`}>
          <Button className="w-full">
            View Detail
          </Button>
        </Link>

      </Card>
    </div>
  );
};

export default BookCard;