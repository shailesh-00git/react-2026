import { useCounterStore } from "../store/counterStore";
function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h1>Zustand</h1>
      <h3>count : {count}</h3>
      <div>
        <button onClick={increase} style={{ margin: "10px" }}>
          +
        </button>
        <button onClick={decrease} style={{ margin: "10px" }}>
          -
        </button>
        <button onClick={reset} style={{ margin: "10px" }}>
          reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
