import React from "react";

const ProductCard = ({ product , del}) => {
  return (
    <div className="border-2 p-4 m-4 rounded flex flex-col gap-2">
      <div className="w-50">
        <img className="object-cover"
         src={product.image} alt="Product" />
      </div>
      <div>
        <h2 className="font-semibold">{product.title.substring(0,15)}</h2>
        <p className="text-xs">{product.category}</p>
        <p className="text-green-600">{product.price}</p>
      </div>
      <button onClick={()=> del(product.id)} className="p-2 bg-red-500 rounded text-white">Delete</button>
    </div>
  );
};

export default ProductCard;
