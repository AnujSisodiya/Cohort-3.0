// import React, { useState } from 'react';
// import { getAllProducts } from './api/productApi';
// import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import ProductCard from './components/ProductCard';

// const Tanstack = () => {
//   let limit = 10;
//   const [page, setPage] = useState(0);

//   let { data, isPending, isError, isPlaceholderData } = useQuery({
//     queryKey: ['products', page],
//     queryFn: () => getAllProducts(page, limit),
//     placeholderData: keepPreviousData,
//   });

//   if (isPending) return <h1>Loading</h1>;
//   if (isError) return <h1>Something went Wrong</h1>;

//   let totalPage = Math.ceil(data.total / limit);

//   return (
//     <div className="flex flex-col items-center justify-between p-4 gap-6  bg-black">
//       <div
//         style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
//         className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 "
//       >
//         {data?.products.map((val) => (
//           <ProductCard key={val.id} product={val} />
//         ))}
//       </div>
//       <div className="flex items-center gap-2 text-white">
//         <button
//           className="px-4 py-2 rounded bg-red-500 cursor-pointer"
//           disabled={page === 0}
//           onClick={() => setPage(page - 1)}
//         >
//           Prev
//         </button>
//         <p>
//           {page + 1} of {totalPage}
//         </p>
//         <button
//           className="px-4 py-2 rounded bg-red-500 cursor-pointer"
//           onClick={() => setPage(page + 1)}
//           disabled={page >= totalPage - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Tanstack;
