import React, { useState } from "react";
import "./Search.css";
import Sres from './SearchRes';
function Search() {

  const [image,imgSet] = useState('');
  
  const InputEvent = (e) => {
    let data = e.target.value;
    imgSet(data);
  };
  return (
    <>
      <div className="Main">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search Images"
          onChange={InputEvent}
          value={image}
        />

        { image=== "" ? null : <Sres name ={image}/> }
        
      </div>
    </>
  );
}

export default Search;
