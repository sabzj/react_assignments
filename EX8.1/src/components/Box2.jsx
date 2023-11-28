// import React from "react";

// import "./Box2.css";

// import Box3 from "./Box3";

// export default function Box2() {
//   // const divStyle = {
//   //   height: "90%",
//   //   width: "90%",
//   //   backgroundColor: "cyan",

//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // };
//   return (
//     // <div style={divStyle}>
//     <div className="Box2">
//       <Box3 />
//     </div>
//   );
// }

/// styled component ///

import React from "react";
import styled from "styled-components"; // Note the correct import statement

import Box3 from "./Box3";

export default function Box2() {
  const StyledDiv = styled.div`
    height: 90%;
    width: 90%;
    background-color: cyan;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <StyledDiv>
      <Box3 />
    </StyledDiv>
  );
}
