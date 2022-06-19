import React from "react";
import ReactDOM from "react-dom/client";

const name = "Nurul";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <h1>Expression and Template Literals</h1>
      <h3>My name is {name}</h3>
      <p>My lucky digit {1 + 2}</p>
      <h4>Template Literals</h4>
      <p>{`Name is ${name} and age is ${20+4}`}</p>
    </div>

    <div>
      <h1>React Starting Code</h1>
      <h2>Md. Nurul Islam</h2>
      <ol>
        <li>C/C++</li>
        <li>Java/Javascript</li>
        <li>PHP/Laravel</li>
        <li>Reactjs</li>
      </ol>
    </div>
  </>
);
