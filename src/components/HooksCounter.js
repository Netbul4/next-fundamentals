import React, { useState } from "react";

export default function HooksCounter(props) {
  // Calling useState to analyze what contains.
  console.log(useState());

  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </nav>
      <p>Counter of {props.title}</p>
      <h3>{counter}</h3>
    </>
  );
}

HooksCounter.defaultProps = {
  title: "Clicks",
}