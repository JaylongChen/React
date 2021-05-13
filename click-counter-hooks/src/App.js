import "./App.css";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>click counter using hooks</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>you clicked {count} times</p>
    </div>
  );
}

export default Counter;
