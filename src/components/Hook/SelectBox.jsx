import React from "react";
import { useState } from "react";
import "./SelectBox.css";

function SelectBox() {
  const [num,setNum] = useState(0);
  return (
    <>
      <div className="main">
        <div className="res">
          <h1>Select Box value is {num}</h1>

          <select className="select" value={num} onChange={(e)=>{
            setNum(e.target.value);
          }}>
            <option value="1">Select Value</option>
            <option value="12">12</option>
            <option value="35">35</option>
            <option value="4">4</option>
            <option value="1">1</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SelectBox;
