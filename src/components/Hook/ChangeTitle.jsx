import React, { useEffect, useState } from "react";

const ChangeTitle = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `You clicked me ${num} times`;
  });

  return (
    <div> 
      <h1> ChangeTitle</h1>
      <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
    </div>
  );
};

export default ChangeTitle;
