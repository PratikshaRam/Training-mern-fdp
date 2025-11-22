import { useState } from "react";

//import (useState) from "react";

function StateDemo() {
  const [count, setCount] = useState(0);
    return (
    <div>
      <h1>State Demo Component</h1>
      <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>

    </div>
  );
}
export default StateDemo;