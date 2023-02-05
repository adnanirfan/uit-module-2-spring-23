import { useState } from "react";
import "./App.css";
import Toggle from "./Toggle";

function App() {
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const onDelete = (index) => {
    const _copy = [...list];
    _copy.splice(index, 1);

    setList([..._copy]);
  };

  const onEdit = (index) => {
    setEditIndex(index);
    setTodo(list[index]);
  };

  return (
    <div className="App">
      {/* <Toggle /> */}
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />

      {editIndex === null ? (
        <button
          onClick={() => {
            setList([...list, todo]);
            setTodo("");
          }}
        >
          Add Todo
        </button>
      ) : (
        <button
          onClick={() => {
            const _copy = [...list];
            // _copy.splice(editIndex, 1, todo);
            _copy[editIndex] = todo;
            setList([..._copy]);
            setTodo("");
            setEditIndex(null);
          }}
        >
          Update Todo
        </button>
      )}

      <ul>
        {list.map((item, index) => {
          return (
            <li>
              {item}
              <button
                disabled={editIndex !== null}
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
              <button
                disabled={editIndex !== null}
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
