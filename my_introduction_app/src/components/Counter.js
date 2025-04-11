import React, {useState} from "react";

function Counter() {// Functional component Counter
  const [count, setCount] = useState(0);
  //This line creates state variables count and setCount using the useState Hook. The initial value of count is set to 0.
// useState is a Hook that lets you add React state to function components. It returns an array with two elements: the current state value and a function to update it.
// The first element is the current state value (count), and the second element is a function to update that state (setCount).
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;