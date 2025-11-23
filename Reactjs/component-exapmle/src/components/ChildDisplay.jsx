function ChildDisplay(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {props.count}</p>
    </div>
  );
}       
export default ChildDisplay;