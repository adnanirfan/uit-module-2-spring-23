import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [cls, setClass] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/users");
    console.log(response.data);
    setData(response.data);
  };

  const submit = async () => {
    // const x = await fetch("http://localhost:3001/users", {
    //   method: "POST",
    //   body: JSON.stringify({ name, class: cls }),
    // });
    const x = await axios.post("http://localhost:3001/users", {
      name,
      class: cls,
    });
    fetchData();

    console.log(x);
  };

  return (
    <div>
      App
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
  );
}
