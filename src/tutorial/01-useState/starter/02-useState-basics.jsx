import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={decreaseCount}>
        -
      </button>
      <button type="button" className="btn" onClick={increaseCount}>
        +
      </button>
    </>
  );
};

export default UseStateBasics;
