import React from "react";
import { useState, useEffect } from "react";
import "./SelectBox.css";
import axios from "axios";

function SelectBox() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState();
  const [move, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });
  return (
    <>
      <div className="main">
        <div className="res">
          <h3>
            You have Choosen <span style={{ color: "red" }}>{num} value</span>{}
          </h3>
          <h3>
            I am<span style={{ color: "red" }}> {name}</span>
          </h3>
          <h3>
            I have <span style={{ color: "red" }}>{move} moves</span>
          </h3>

          <select
            className="select"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          >
            <option value="1">Select Value</option>
            <option value="12">12</option>
            <option value="35">25</option>
            <option value="4">4</option>
            <option value="423">423</option>
            <option value="323">323</option>
            <option value="33">33</option>
            <option value="112">112</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SelectBox;
