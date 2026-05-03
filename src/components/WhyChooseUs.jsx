import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-20">

      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold">
            Why Choose Book Nest?
          </h1>

          <p className="text-gray-500 mt-4">
            We make reading easier, smarter, and more enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-base-200 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-4">
              Huge Collection
            </h2>

            <p className="text-gray-600">
              Thousands of books from different categories and authors.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-4">
              Affordable Prices
            </h2>

            <p className="text-gray-600">
              Get books at the best prices with exciting discounts.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-4">
              Fast Delivery
            </h2>

            <p className="text-gray-600">
              Receive your favorite books quickly and safely.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;