import React from "react";
export default function TodoList(props) {
  return (
    <div className="rmv">
      <i
        className="fa-solid fa-xmark"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <li>{props.list}</li>
    </div>
  );
}
