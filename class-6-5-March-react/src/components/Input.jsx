import { useContext, useState } from "react";
import { ListContext } from "../ListContext";

function Input() {
  const x = useContext(ListContext);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          if (!text) return;

          x.setList([...x.list, text]);
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export { Input };
