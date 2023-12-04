import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./boxesAnimation.css";

function BoxesAnimation() {
  const [box1, setbox1] = useState("");
  const [box2, setbox2] = useState("");
  const [box3, setbox3] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setbox1("face_box1");
      setbox2("face_box2");
      setbox3("face_box3");
    }, 1000);

    return () => {
      setTimeout(() => {
        setbox1("");
        setbox2("");
        setbox3("");
      }, 4000);
    };
  }, []);

  return (
    <>
      <div id={box1}></div>
      <div id={box2}></div>
      <div id={box3}></div>
    </>
  );
}

export default BoxesAnimation;
