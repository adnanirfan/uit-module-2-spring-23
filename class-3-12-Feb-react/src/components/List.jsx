function List(props) {
  return (
    <ul>
      {props.list.map((item, index) => {
        return (
          <li key={"list-" + index}>
            {item}
            <button
              disabled={props.editIndex !== null}
              onClick={() => props.onDelete(index)}
            >
              Delete
            </button>
            <button
              disabled={props.editIndex !== null}
              onClick={() => props.onEdit(index)}
            >
              Edit
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
