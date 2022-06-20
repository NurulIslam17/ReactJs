import React from "react";


function IfElse()
{
  const num = 2;
  if(num%2===0){
    return(
        <div>
          <h1>{num} is Even</h1>
        </div>
      )

  }
  else{
    return(
      <div>
        <h1>{num} is Odd</h1>
      </div>
    )
  }

}
export default IfElse;