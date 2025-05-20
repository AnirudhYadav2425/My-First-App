import { useState } from "react";

const CounterInFbs = () => {
  let [count, setCount] = useState(0);

  let incr = () => 
    {
        setCount(count + 1);
    };
  let decr = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter is Already 0");
    }
  };
  let re = () => setCount(count * 0);

  return (
    <div>
      <h1>Counter in Function Based Component</h1>
      <h2>Count : {count}</h2>

      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <button onClick={re}>Reset</button>
    </div>
  );
};
export default CounterInFbs;
