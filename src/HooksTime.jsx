import React, { useState } from "react";

const main = {
  width: "200px",
  height: "100px",
  margin: "auto",
  textAlign: "center",
  backgroundColor: "grey",
};
const btn = {
  color: "red",
  padding: "6px",
  backgroundColor: "#4ff23f",
  fontSize: "18px",
};
const time = {
  color: "#fff",
  padding: "6px",
  backgroundColor: "Black",
  margin: "5px",
  fontSize: "20px",
};

function HooksTime() {
  let curTime = new Date().toLocaleTimeString();
  const [curT, updateT] = useState(curTime);

  function updateTfn() {
    let time = new Date().toLocaleTimeString();
    updateT(time);
  }

  return (
    <>
      <div style={main}>
        <h1 style={time}>{curT}</h1>
        <button style={btn} onClick={updateTfn}>
          Current Time
        </button>
      </div>
    </>
  );
}
export default HooksTime;
