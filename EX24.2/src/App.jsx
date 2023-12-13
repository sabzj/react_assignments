import { useState } from "react";
import "./App.css";
import useFetchData from "./components/fetchHook";
function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading } = useFetchData();

  return (
    <>
      <p>{data?.title}</p>
    </>
  );
}

export default App;
