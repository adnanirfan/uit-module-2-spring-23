import { useState, useEffect } from "react";
import "./App.css";

import ChildComponent from "./components/ChildComponent";

function App() {
  const [parentText, setParentText] = useState("");

  // useEffect(() => {
  //   // MOUNT - 1 time
  //   // console.log("Parent --|-- ", parentText);
  // }, []);

  // useEffect(() => { // MOUNT & RE-Render - multiple time
  //   console.log("Parent --|-- ", parentText);
  // }, [parentText]);

  // useEffect(() => { // Run on Every State Change - Multiple times
  //   console.log("Parent --|-- ", parentText);
  // });

  return (
    <div className="App">
      <label>Parent Component</label>
      <input
        value={parentText}
        onChange={(e) => setParentText(e.target.value)}
        placeholder="Enter Todo"
      />

      <hr />

      {parentText && <ChildComponent parentText={parentText} />}
    </div>
  );
}

export default App;
