import React, { useRef } from "react";
import "./imageToggle.css";

function ImageToggle(props) {
  const imageRef = useRef();

  const setGreyscale = () => {
    imageRef.current.className = "greyscale";
  };

  const removeGreyscale = () => {
    imageRef.current.className = "";
  };

  return (
    <img
      ref={imageRef}
      className="greyscale"
      src={props.source}
      alt={props.altText}
      onMouseEnter={removeGreyscale}
      onMouseLeave={setGreyscale}
    />
  );
}

export default ImageToggle;

// import React, { useState, useRef } from "react";
// const image1 = <source src="/imgs/horse1.jpg" ><source />
// const image2 = <source src="/imgs/camel.jpg"><source/>

// function ImageToggle() {
//   const flipImage = useRef();
//   const [isToggle, setIsToggle] = useState();
//   const handleImage = ()=> {
//     setIsToggle(isToggle)
//   }

//   addEventListener("mouseover", (event) => {flipImage.current.image});

// onmouseover = (event) => {

// };
//   return <div>
//     ref = {flipImage}
//   </div>;
// }

// export default ImageToggle;
