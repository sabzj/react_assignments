import { useState } from "preact/hooks";

import "./app.css";
import Box1 from "./components/Box1";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box1 />
    </>
  );
}

export default App;
