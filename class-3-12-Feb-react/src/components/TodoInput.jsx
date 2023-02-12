function TodoInput(props) {
  return (
    <input
      value={props.todo}
      onChange={props.onInputChange}
      placeholder="Enter Todo"
    />
  );
}
export default TodoInput;
