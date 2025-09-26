import "./App.css";
import React, { useState } from "react";

export function FuncApp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default FuncApp;
