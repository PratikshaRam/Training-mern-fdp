function ChildButton(props) {
  return (
    <div>
      <button onClick={props.increase}>Increment Count</button>
      <button onClick={props.decrease}>Decrease Count</button>
    </div>
  );
}       
export default ChildButton;