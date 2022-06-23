import React, { useState } from "react";
import './accordion .css';

export default function ViewAccordion({question,answer}) {
  const [show,setShow] = useState(false);
  return (
    <>
    <div className="heading">
      <p onClick={ ()=>{
        setShow(!show)
      }}> {show? "🤦‍♀️" : "🤞"}</p>
      <h4>{question}</h4>
    </div>
    {
     show && <p className="ansP">{answer}</p>
    }
    
    </>
  );
}
