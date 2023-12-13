import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounce, setdebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounce(value);
      console.log("setvalue =>", value);
    }, delay);
    return () => {
      console.log("cleared =>", value);
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounce;
};
