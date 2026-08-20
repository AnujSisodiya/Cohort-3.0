import { useNavigate } from 'react-router';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`detail/${product.id}`)}
      className="flex w-full h-60 items-center gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      {/* Product Image */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-medium uppercase text-gray-400">
          {product.category}
        </p>

        <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-gray-900">${product.price}</p>
      </div>

      {/* Remove */}
      <button
        className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        title="Remove item"
      >
        🗑️
      </button>
    </div>
  );
};

export default ProductCard;
