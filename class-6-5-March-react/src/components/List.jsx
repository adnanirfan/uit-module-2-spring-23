import { useContext } from "react";
import { ListContext } from "../ListContext";

function List() {
  const x = useContext(ListContext);
  console.log("value from context: ===== ", x);

  return (
    <ul>
      {x.list.map(function (item, index) {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export { List };
