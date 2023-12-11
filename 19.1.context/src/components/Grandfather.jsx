// import { useContext, useState } from "react";

// function Grandfather() {
//   return <div></div>;
// }

// export default Grandfather;

// Grandfather.js
import React from "react";
import Father from "./Father";

const Grandfather = () => {
  return (
    <div>
      <h2>Grandfather Component</h2>
      <Father />
    </div>
  );
};

export default Grandfather;
