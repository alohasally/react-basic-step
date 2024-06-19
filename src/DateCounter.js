import React, { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div className="dateCount">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <p>step:{step}</p>
        {/* <button onClick={() => setStep((s) => --s)}>-</button>
        <p>step:{step}</p>
        <button onClick={() => setStep((s) => ++s)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => (c -= step))}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        ></input>
        <button onClick={() => setCount((c) => (c += step))}>+</button>
        <div>
          <span>
            {count === 0
              ? "Today is"
              : count < 0
              ? `${Math.abs(count)}days ago is`
              : `After ${count} days is`}
          </span>
          <span>{date.toDateString()}</span>
        </div>
      </div>
      {count !== 1 || step !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default DateCounter;
