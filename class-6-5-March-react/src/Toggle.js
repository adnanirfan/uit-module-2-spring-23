import "./App.css";
import { useState } from "react";

function Toggle() {
  const [bool, setBool] = useState(true);
  return (
    <div
      className="App"
      style={{ backgroundColor: bool ? "orangered" : "yellow" }}
    >
      <h1>Toggle Component</h1>

      {bool ? "Value is TRUE" : "Value is False"}

      <button onClick={() => setBool(!bool)}>Toggle Value</button>
    </div>
  );
}

export default Toggle;
