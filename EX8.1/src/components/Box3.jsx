// import React from "react";

// import "./Box3.css";

// import Box4 from "./Box4";

// export default function Box3() {
//   // const divStyle = {
//   //   height: "90%",
//   //   width: "90%",
//   //   backgroundColor: "pink",

//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   //   flexDirection: "column",

//   //   gap: "5%",
//   // };
//   return (
//     // <div style={divStyle}>
//     <div className="Box3">
//       <Box4 />
//       <Box4 />
//     </div>
//   );
// }

// styled component //

import React from "react";
import styled from "styled-components";

import Box4 from "./Box4";

export default function Box3() {
  const StyledDiv = styled.div`
    height: 90%;
    width: 90%;
    background-color: pink;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 5%;
  `;

  return (
    <StyledDiv>
      <Box4 />
      <Box4 />
    </StyledDiv>
  );

  // You need to return MyComponent or render it directly in Box2
}
