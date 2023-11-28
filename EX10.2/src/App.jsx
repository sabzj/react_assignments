import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// import pic1 from "/images/namibia-1.jpg"
import ImageToggle from "./components/ImageToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="container">
        <ImageToggle source="/imgs/camel.jpg" altText="a Camel in Petra city" />
        <ImageToggle source="/imgs/horse1.jpg" altText="a Horse in the wild" />
      </section>
    </>
  );
}

export default App;
