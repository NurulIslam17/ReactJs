import React, { useState } from "react";
import "./Todo.css";

export default function ToDo() {
  const [inpData, inputUpd] = useState(" ");
  const [item, setItem] = useState([]);

	const inputEvent = (e) => {
    inputUpd(e.target.value);
  };
	

  const addItem = () => {
    setItem((oldItem) => {
				return [...oldItem,inpData]
		})
		inputUpd("");
  };

  return (
    <>
      <div className="main">
        <div className="display">
          <h1>
            <span>tOdO</span> List
          </h1>
          <br />
          <div className="inpDiv">
            <input
              type="text"
              onChange={inputEvent}
              placeholder="Add List Item"
							value={inpData}
            />
            <button onClick={addItem}> + </button>
          </div>
          <ol>
            {item.map((itmVal) => {
              return <li>{itmVal}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
