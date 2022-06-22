import React, { useState } from 'react'
import './IncreDecre.css';

export default function IncreDecre() {

  let n=0;
  let [num,setNum] = useState(n);
  const increment = () =>{
    setNum(num + 1);
  }
  const decrement = () =>{
    if(num>0){
      setNum(num-1);
    }
    else{
      setNum(0)
      alert('Negative Value Avoided');
    }
    
  }
  return (
    <div className='main btn'>
      <div className='Display'>
        <h1> {num} </h1>
        <div className='btn' >
          <button onClick={increment} className='inc'> Increment </button>
          <button onClick={decrement} className='dec'> Decrement </button>
        </div>
      </div>
      
    </div>
  )
}
