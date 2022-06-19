import React from "react";

let greeting = "";
let styleGreet = {};

let curTime = new Date();
curTime = curTime.getHours();

if (curTime >= 4 && curTime < 11) {
  greeting = "Good Morning";
  styleGreet.color = "green";
} else if (curTime >= 11 && curTime < 20) {
  greeting = "Good Afternoon";
  styleGreet.color = "Orange";
} else {
  greeting = "Good Night";
}

function Greet() {
  return (
    <>
      <div>
        <h1>Creating Simple Greeting Website</h1>
        <h2>
          Hi Everyone , <span style={styleGreet}>{greeting}</span>
        </h2>
      </div>
    </>
  );
}
export default Greet;
