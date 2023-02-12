import { useState } from "react";
import "./App.css";
import List from "./components/List";
import TodoInput from "./components/TodoInput";
import ActionButtons from "./components/ActionButtons";

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

  const onInputChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };

  return (
    <div className="App">
      <TodoInput text={todo} onInputChange={onInputChange} />

      <ActionButtons
        editIndex={editIndex}
        onAdd={() => {
          console.log(list, todo);
          setList([...list, todo]);
          setTodo("");
        }}
        onUpdate={() => {
          const _copy = [...list];
          _copy[editIndex] = todo;
          setList([..._copy]);
          setTodo("");
          setEditIndex(null);
        }}
      />

      <List
        list={list}
        editIndex={editIndex}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
