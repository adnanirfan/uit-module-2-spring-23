import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// npm install -g create-react-app
// create-react-app my-app

function App() {
  const [name, setName] = useState("Adnan");
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <hr />
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />
      <button
        onClick={() => {
          setList([...list, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default App;
