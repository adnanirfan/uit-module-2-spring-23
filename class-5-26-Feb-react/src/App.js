import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/posts");

    response
      .then(function (res) {
        console.log("2", res);
        return res.json();
      })
      .then((_data) => {
        console.log("3", _data);
        setData(_data);
      });

    console.log("1", response);
  }, []);
  
  return (
    <div className="App">
      <h1>Class 5</h1>
      {/* {data?.[0]?.title} */}
      <table>
        {data.map((p) => {
          return (
            <tr>
              <td>{p.id}</td>
              <td>{p.userId}</td>
              <td>{p.title}</td>
              {/* <td>{p.body}</td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
