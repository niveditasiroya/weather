import React, { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

const Parent = () => {
  const [state, setState] = useState("");

  // const stateUp = (arg) => {
  //   if ((state = "false")) {
  //     setState(arg);
  //   }
  // };

  return (
    <div>
      <h2>{state}</h2>
      {/* <Child state={state} /> */}
      <Child2 onClick={setState} />
    </div>
  );
};

export default Parent;
