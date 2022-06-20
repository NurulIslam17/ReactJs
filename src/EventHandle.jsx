import React,{useState} from "react";
import './EventHandle.css';
const colr ={

}

function EventHandle() {

  const aqua ="aqua"
  const [curCol,updCorl] = useState(aqua);
  const [name,pdaT] = useState('Click Me');

  function cngBg()
  {
   let newBg ="#1aed3a";
    updCorl(newBg);
    pdaT("UUTch !!");
    //console.log("Clicked");
  }

  //double click
  function bgCol()
  {
    updCorl("aqua") ;
    pdaT("Aouuo !");
  }
  return (
    <>
      <div className="div" style={{background:curCol}}>
        <button onClick={cngBg} onDoubleClick={bgCol} className="btn">{name}</button>
      </div>
    </>
  );
}
export default EventHandle;
