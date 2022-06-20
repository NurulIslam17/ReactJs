import React, { useState } from "react";

const main = {
  color: "red",
  textAlign: "center",
};

function Hooks() {
  const st = useState();
  let [count, setUpdate] = useState(0);

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
