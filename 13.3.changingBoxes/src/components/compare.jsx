import React, { useState, useEffect } from "react";
import "./objectBox.css";

function ObjectBox() {
  const [box, setBox] = useState("");
  const colors = ["pink", "purple", "blue", "yellow", "gray"];
  const [index, setIndex] = useState(0);
  const [roundRadiusCount, setRoundRadiusCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < 5) {
        setBox(colors[index]);
        setIndex((index) => index + 1);
      } else if (index % 5 === 0 && index !== 0) {
        setBox("roundRadius");
        setRoundRadiusCount((count) => count + 1);
      } else {
        setBox("");
      }
    }, 500);
  }, [index]);

  return (
    <>
      <div className="box" id={box}></div>
    </>
  );
}

export default ObjectBox;
