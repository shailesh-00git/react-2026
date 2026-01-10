import { product } from "./data/product";
import { useCart } from "./hooks/useCart";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const { cart, addToCart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-700 py-6 text-center">
        <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section aria-label="Products" className="lg:col-span-2">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {product.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </section>

          <section aria-label="Cart" className="lg:col-span-1">
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
