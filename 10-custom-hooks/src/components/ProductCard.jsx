import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="m-2 w-64  delay-125 duration-300 ease-in-out hover:-translate-y-1 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>

      <p className="mb-4 text-gray-600">Rs. {product.price}</p>

      <button
        onClick={() => onAddToCart(product)}
        className="flex items-center justify-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 transition"
      >
        <FaShoppingCart />
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default ProductCard;
