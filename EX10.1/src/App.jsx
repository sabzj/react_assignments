import { useRef, useState } from "react";

import "./App.css";
import UseRefPlayer from "./components/PlaypauseVide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseRefPlayer />
    </>
  );
}

export default App;
