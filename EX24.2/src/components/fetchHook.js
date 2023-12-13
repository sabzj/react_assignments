import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "./useDebounce";

function useFetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUrl = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUrl();
  }, [useDebounce]);
  return {
    data,
    isLoading,
  };
}
export default useFetchData;
