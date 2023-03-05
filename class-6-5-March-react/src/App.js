import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { ListContext } from "./ListContext";

function App() {
  const [list, setList] = useState([]);
  return (
    <ListContext.Provider value={{ list, setList }}>
      <div className="App">
        <Input />
        <List />
        {/* action button */}
        {/* list */}
      </div>
    </ListContext.Provider>
  );
}

export default App;
