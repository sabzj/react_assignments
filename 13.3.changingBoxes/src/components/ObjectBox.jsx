import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./objectBox.css";

function ObjectBox() {
  const [box, setBox] = useState("");
  const colors = ["pink", "purple", "blue", "yellow", "gray"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setBox(colors[index]);
      index < 5
        ? setIndex((index) => index + 1)
        : index >= 5 - 1
        ? setBox("roundRadius")
        : setBox("");
    }, 500);
  }, [index]);

  return (
    <>
      <div className="box" id={box}></div>
    </>
  );
}

export default ObjectBox;
