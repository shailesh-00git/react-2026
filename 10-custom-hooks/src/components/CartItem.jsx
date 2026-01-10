import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CardItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm">
      {/* Item info */}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <p className="text-sm text-gray-500">₹{item.price}</p>
      </div>

      {/* Quantity controls */}
      <div className="mx-4 flex items-center gap-3">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="rounded-full border p-2 text-gray-600 hover:bg-gray-100"
        >
          <FaMinus size={12} />
        </button>

        <span className="w-6 text-center font-medium">{item.quantity}</span>

        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="rounded-full border p-2 text-gray-600 hover:bg-gray-100"
        >
          <FaPlus size={12} />
        </button>
      </div>

      {/* Remove button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:text-red-800 transition"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CardItem;
