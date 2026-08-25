const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-xs text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
