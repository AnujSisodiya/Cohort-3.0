import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const getsingleProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      setSingleProduct(res.data);
    } catch (error) {
      console.log('Error while getting product', error);
    }
  };

  useEffect(() => {
    getsingleProductData();
  }, [id]);

  // Loading state
  if (!singleProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-10">
      {/* Product Container */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ================= IMAGE ================= */}
          <div className="relative flex min-h-[500px] items-center justify-center bg-gray-50 p-10">
            {/* Category */}
            <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-semibold capitalize text-gray-600 shadow-sm">
              {singleProduct.category}
            </span>

            {/* Image */}
            <img
              src={singleProduct.image}
              alt={singleProduct.title}
              className="h-[400px] w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            {/* Category */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {singleProduct.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2">
                <span className="text-yellow-500">★</span>

                <span className="font-semibold text-gray-800">
                  {singleProduct.rating?.rate}
                </span>
              </div>

              <span className="text-sm text-gray-400">
                {singleProduct.rating?.count} ratings
              </span>
            </div>

            {/* Price */}
            <div className="mt-7">
              <p className="text-sm text-gray-400">Price</p>

              <p className="mt-1 text-4xl font-bold text-gray-900">
                ${singleProduct.price?.toFixed(2)}
              </p>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-gray-200" />

            {/* Description */}
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="text-sm leading-7 text-gray-500">
                {singleProduct.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-gray-900">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-xl border border-gray-200">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="flex h-11 w-11 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100"
                >
                  −
                </button>

                <span className="flex h-11 w-12 items-center justify-center border-x border-gray-200 font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-11 w-11 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
                Add to Cart
              </button>

              <button className="rounded-xl border border-gray-300 px-5 py-4 text-gray-700 transition hover:bg-gray-100">
                ♡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
