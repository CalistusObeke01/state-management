import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return prevCount;
      }
      return prevCount - 1;
    });
  };
  return (
    <div className="App">
      <h2>State management</h2>
      <p>
        Updating the count state by either the increment or decrement function
      </p>
      <button onClick={decrement}>Minus</button>
      &nbsp; {count} &nbsp;
      <button onClick={increment}>Plus</button>
    </div>
  );
}
