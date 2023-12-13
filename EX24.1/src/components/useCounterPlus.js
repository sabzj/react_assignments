import { number } from "prop-types";
import { useState } from "react";

function useCounterPlus(value) {
  const [isCount, setIsCount] = useState(value);

  const addOne = () => {
    setIsCount(isCount + 1);
  };
  const removeOne = () => {
    setIsCount(isCount - 1);
  };
  const doubleOne = () => {
    setIsCount(isCount * 2);
  };
  const divideOne = () => {
    setIsCount(isCount / 2);
  };

  return { isCount, addOne, removeOne, doubleOne, divideOne };
}

export default useCounterPlus;
