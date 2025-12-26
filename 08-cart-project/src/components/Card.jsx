function Card({ productList, addToCart }) {
  return (
    <div style={{ border: "2px solid black", width: "300px", padding: "20px" }}>
      {productList.map((product) => (
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
          <button onClick={() => addToCart(product.id)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
