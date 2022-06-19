import React from "react";
import "./index.css";

const name = "Nurul";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/250";
const img2 = "https://picsum.photos/201/250";
const img3 = "https://picsum.photos/210/250";
const link = "https://picsum.photos/";

const heading = {
  color: "#000fff",
  textAlign: "center",
  textTransform: "capitalize",
};

function Basic() {
  return (
    <>
    <div>
      <h1 style={heading}>Inline css style</h1>
    </div>
    <div className="cssDiv">
      <h2>JSX Attributes</h2>
      <h3>What is your name ? {name} </h3>
      <img src={img1} alt="Random Image" />
      <img src={img2} alt="Random Image" />
      <a href={link} target="_nurul">
        <img src={img3} alt="Random Image" />
      </a>
    </div>

    <div>
      <h2>Display Current Date and Time in JSX</h2>
      <h3>{`Today : ${date}`}</h3>
      <h3>{`Time : ${time}`}</h3>
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
}

export default Basic;
