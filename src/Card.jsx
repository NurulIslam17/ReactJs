import React from "react";
import './Card.css';

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgScr} alt="randomPicture"/>
          <div className="cardInfo">
            <span className="title">{props.title}</span><br/>
            <a href={props.link} target="_new">
            <button className="btn">Watch Details</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
