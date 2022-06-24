import React, { useState } from "react";

const main = {
  color: "red",
  textAlign: "center",
};

function Hooks() {
  let init = 0;
  let [count, setUpdate] = useState(init);

  function IncNum() {
    setUpdate(count++);
  }
  return (
    <>
      <div style={main}>
        <h1> {count} </h1>
        <button onClick={IncNum}>Count</button>
      </div>
    </>
  );
}
export default Hooks;
