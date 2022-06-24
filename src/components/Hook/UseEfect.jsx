import React, { useState, useEffect } from "react";

const UseEfect = () => {

  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    return alert("Clicked");
  },[counts]);

  return (
    <div>
      <h1>UseEfect</h1>
      <p>
        The useEffect Hook allows you to perform side effects in your
        components.Some examples of side effects are: fetching data, directly
        updating the DOM, and timers.
      </p>
      <p>useEffect accepts two arguments. The second argument is optional.</p>
      <p>useEffect (function, dependency) </p>
      <p>* Whenever render function is called use effect is executed </p>
      <ol>
        <li>* use []  only first render</li>
        <li>* use [anyState] only excute that specific condition after rendering</li>
      </ol>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me {count}
      </button>
      <button
        onClick={() => {
          setCounts(counts + 1);
        }}
      >
        Click Me {counts}
      </button>
    </div>
  );
};
export default UseEfect;
