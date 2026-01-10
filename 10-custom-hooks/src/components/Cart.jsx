import CartItem from "./CartItem.jsx";

function Cart({ cart, onUpdateQuantity, total, onRemove }) {
  if (!cart) {
    return (
      <div className="mt-10 text-center text-gray-500 text-lg">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="mx-auto mt-2 max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Shopping Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <h3 className="text-xl font-semibold text-gray-800">Total: ₹{total}</h3>

        <button className="rounded-md bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
