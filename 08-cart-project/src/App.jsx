import Card from "./components/Card";
import React from "react";
import CartItems from "./components/CartItems";
function App() {
  const productList = [
    {
      id: 100,
      title: "shoes",
      description: "A branded demim shoes",
      price: "3000",
      discount: "20",
      rating: "400",
    },
    {
      id: 200,
      title: "t-shirt",
      description: "A branded demim t-shirt",
      price: "2000",
      discount: "30",
      rating: "200",
    },
    {
      id: 300,
      title: "paints",
      description: "A branded demim paints",
      price: "1200",
      discount: "20",
      rating: "500",
    },
  ];
  const [cardItem, setCartItem] = React.useState([]);
  function addToCart(id) {
    const product = productList.find((product) => {
      if (product.id === id) return product;
    });
    const newItem = { ...product, cartId: Date.now() };

    setCartItem([...cardItem, newItem]);
  }
  return (
    <div style={{ display: "flex", gap: "50px", alignItems: "start" }}>
      <Card productList={productList} addToCart={addToCart}></Card>
      {cardItem.length !== 0 && (
        <CartItems cardItem={cardItem} setCartItem={setCartItem}></CartItems>
      )}
    </div>
  );
}
export default App;
