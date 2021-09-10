import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked ♥ {count} times</p>
    </div>
  );
}
