import React from "react";

function CartItems({ cardItem, setCartItem }) {
  const [totalPrice, setTotalprice] = React.useState(0);
  function handleRemove(id) {
    setCartItem(cardItem.filter((item) => item.cartId !== id));
  }
  React.useEffect(() => {
    const total = cardItem.reduce((sum, item) => sum + Number(item.price), 0);

    setTotalprice(total);
  }, [cardItem]);
  function handlePay() {
    alert(`Payment successful! Total: Rs.${totalPrice}`);
    setCartItem([]); // optional: clear cart after payment
  }

  return (
    <div style={{ border: "2px solid black", width: "300px", padding: "20px" }}>
      {cardItem.map((product) => (
        <div
          key={product.id}
          style={{
            border: "2px solid black",
            padding: "20px",
            marginBottom: "8px",
          }}
        >
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Rating: {product.rating}K</p>
          <p>Rs.{product.price}</p>
          <button onClick={() => handleRemove(product.cartId)}>
            Remove to cart
          </button>
        </div>
      ))}

      {cardItem.length > 0 && (
        <>
          <button onClick={() => handlePay()}>Pay</button>
          <h3>Price: {totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default CartItems;
