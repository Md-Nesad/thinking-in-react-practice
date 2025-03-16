import React from "react";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  const handleIncreament = () => {
    setValue(() => value + 5);
  };

  const handleDecreament = () => {
    setValue(() => value - 5);
  };

  const handleReset = () => {
    setValue(0);
  };
  return (
    <>
      {(value < 100) & (value > -50) ? (
        <>
          <h1>React machine coding round</h1>
          <h2>Counter Application</h2>

          <h2>Initial value: {value}</h2>

          <button onClick={handleIncreament}>Increament</button>
          <button onClick={handleDecreament}>Decreament</button>
          <button onClick={handleReset}>Reset</button>
        </>
      ) : (
        <>
          <h1>React machine coding round</h1>
          <h2>Counter Application</h2>

          <h2>Initial value: {value}</h2>

          <h2>Sorry! You have no permission.</h2>
          <button onClick={handleReset}>Start again</button>
        </>
      )}
    </>
  );
}
