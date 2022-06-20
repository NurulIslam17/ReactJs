import React, { useState } from "react";

const main = {
  textAlign:"center"
}

function DigitalClock() {
  let ct =  new Date().toLocaleTimeString();
  const [curT,updateTime] = useState(ct);

  function updateFn(){
    let time = new Date().toLocaleTimeString();
    updateTime(time);
    
  }
  setTimeout(updateFn,1000)
  return (
    <>
      <div style={main}>
        <h1>{curT}</h1>
      </div>
    </>
  );
}
export default DigitalClock;
