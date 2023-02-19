import { useState } from "react";
import { useEffect } from "react";

function TodoInput() {
  const [text, setText] = useState("");
  const [axis, setAxis] = useState({ x: "", y: "" });

  useEffect(() => {
    // console.log("Child --|-- ", text);

    const callback = (e) => {
      setAxis({ x: e.x, y: e.y });
      console.log(e.x, e.y);
    };
    document.addEventListener("click", callback);

    return () => {
      console.log("UNMOUNT");
      document.removeEventListener("click", callback);
    };
  });

  return (
    <div>
      <label>Child Component</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
    </div>
  );
}
export default TodoInput;
