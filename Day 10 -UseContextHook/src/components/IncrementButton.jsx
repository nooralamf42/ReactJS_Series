import React, { useContext } from "react";
import countContext from "../context/context";

function IncrementButton() {
  const value = useContext(countContext);
  return <button onClick={()=>value.setCount(pre=>pre+1)}>+</button>;
}

export default IncrementButton;
