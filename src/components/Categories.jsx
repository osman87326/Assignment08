import React from "react";

const categories = [
  "Story",
  "Science",
  "Technology",
  "Fantasy",
  "Biography",
  "Programming",
];

const Categories = () => {
  return (
    <div className="py-16 bg-base-200">

      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Browse Categories
          </h1>

          <p className="text-gray-500 mt-3">
            Discover books from your favorite genres
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <h2 className="font-semibold text-lg">
                {category}
              </h2>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Categories;