import React from "react";
import ReactDOM from "react-dom/client";

const name = "Nurul";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <h2>Display Current Date and Time in JSX</h2>
       <h3>{  `Today : ${date}` }</h3>
       <h3>{  `Time : ${time}` }</h3>
    </div>

    <div>
      <h1>Expression and Template Literals</h1>
      <h3>My name is {name}</h3>
      <p>My lucky digit {1 + 2}</p>
      <h4>Template Literals</h4>
      <p>{`Name is ${name} and age is ${20 + 4}`}</p>
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
