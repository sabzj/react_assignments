import React from "react";
import useCounterPlus from "./useCounterPlus";

function CounterPlus() {
  const { isCount, addOne, removeOne, doubleOne, divideOne } =
    useCounterPlus(0);

  return (
    <div>
      <p>Current Count: {isCount}</p>
      <button onClick={addOne}>Increment</button>
      <button onClick={removeOne}>Decrement</button>
      <button onClick={doubleOne}>Multiply</button>
      <button onClick={divideOne}>Divide</button>
    </div>
  );
}

export default CounterPlus;
