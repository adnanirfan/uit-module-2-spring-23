import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [name, setName] = useState("");
  const [cls, setClass] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3005/users");
    console.log(response.data);
    setData(response.data);
  };

  const submit = async () => {
    // const x = await fetch("http://localhost:3005/users", {
    //   method: "POST",
    //   body: JSON.stringify({ name, class: cls }),
    // });
    const x = await axios.post("http://localhost:3005/users", {
      name,
      class: cls,
    });
    fetchData();

    console.log(x);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        App
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            value={cls}
            onChange={(event) => setClass(event.target.value)}
          />
          <button onClick={submit}>Add User</button>
        </div>
      </header>
    </div>
  );
}

export default App;
