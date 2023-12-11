// Father.js
import React from "react";
import Son from "./Son";
import { GiftProvider } from "./GiftContext";

const Father = () => {
  return (
    <div>
      <h2>Father Component</h2>
      <GiftProvider>
        <Son />
      </GiftProvider>
    </div>
  );
};

export default Father;
