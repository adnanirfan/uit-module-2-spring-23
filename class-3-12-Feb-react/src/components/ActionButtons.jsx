function ActionButtons(props) {
  if (props.editIndex === null) {
    return <button onClick={props.onAdd}>Add Todo</button>;
  }

  return <button onClick={props.onUpdate}>Update Todo</button>;

  //   return (
  //     <div>
  //       {props.editIndex === null ? (
  //         <button onClick={props.onAdd}>Add Todo</button>
  //       ) : (
  //         <button onClick={props.onUpdate}>Update Todo</button>
  //       )}
  //     </div>
  //   );
}
export default ActionButtons;
