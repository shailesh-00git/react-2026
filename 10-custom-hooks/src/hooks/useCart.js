import { useState, useEffect, useMemo } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from local storage", error);
      return [];
    }
  });

  // Store cart in localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to local storage", error);
    }
  }, [cart]);

  // Sync cart across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cart") {
        try {
          setCart(JSON.parse(e.newValue || "[]"));
        } catch (error) {
          console.error("Failed to parse cart from local storage", error);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Add to cart
  const addToCart = (product) => {
    setCart((currCart) => {
      let found = false;

      const updatedCart = currCart.map((item) => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return found
        ? updatedCart
        : [...updatedCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((currCart) => currCart.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCart((currCart) =>
      currCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total
  const total = useMemo(() => {
    return Number(
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    total,
  };
}
