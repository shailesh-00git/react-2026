import "./App.css";
import React from "react";
function App() {
  const [count, setCount] = React.useState(0);
  const [val, setVal] = React.useState(1);
  return (
    <>
      <h1>counter</h1>
      <p>The count is : {count}</p>
      <div style={{ margin: "20px 0" }}>
        <button style={{ margin: "0 5px" }} onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button
          style={{ margin: "0 5px" }}
          onClick={() => setCount((count) => Math.max(count - 1, 0))}
        >
          Decrease
        </button>
        <button style={{ margin: "0 5px" }} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px 0",
        }}
      >
        <input
          style={{
            height: "35px",
            outline: "none",
            border: "none",
            borderRadius: "5px",
          }}
          type="text"
          onChange={(e) => setVal(Number(e.target.value))}
          value={val}
        />
        <button onClick={() => setCount(val)}>set to {val}</button>
      </div>
    </>
  );
}

export default App;
