import React, { useState } from 'react';
import { getAllProducts } from './api/productApi';
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import ProductCard from './components/ProductCard';

const InfinteScroll = () => {
  let limit = 10;
  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['products'],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        let loadedData = allPages.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return <h1>Loading...</h1>;
  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];
  return (
    <div className="flex flex-col items-center justify-between p-4 gap-6 text-white bg-black">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
        {allProducts?.map((val) => {
          return <ProductCard key={val.id} product={val} />;
        })}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading more..' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default InfinteScroll;
