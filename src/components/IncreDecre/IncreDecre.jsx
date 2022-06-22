import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@material-ui/core/Button';
import "./IncreDecre.css";

export default function IncreDecre() {
  let n = 0;
  let [num, setNum] = useState(n);
  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert("Negative Value Avoided. Increase the value");
    }
  };

  // default
  return (
    <div className="main btn">
      <div className="Display">
        <h1> {num} </h1>
        <div className="btn">
          <Button onClick={increment} color="secondary">
            <AddIcon/>
          </Button>
          <Button onClick={decrement} color="primary">
            <RemoveIcon/>
          </Button>
        </div>
      </div>
    </div>
  );
}
