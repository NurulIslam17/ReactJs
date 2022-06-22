import React, { useState } from "react";
import List from "./TodoList";
import "./Todo.css";

export default function ToDo() {
  const [inpData, inputUpd] = useState("");
  const [item, setItem] = useState([]);

  const inputEvent = (e) => {
    inputUpd(e.target.value);
  };

  const addItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inpData];
    });
    inputUpd("");
  };

  const deleteItm = (id) => {
    alert("deleted");

    setItem((oldItem) => {
      return oldItem.filter((arrEle, index) => {
        return index !== id;
      });
    });
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
            {item.map((itmVal, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  list={itmVal}
                  onSelect={deleteItm}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
