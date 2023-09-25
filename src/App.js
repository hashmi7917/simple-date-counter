import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <button onClick={() => setStep((c) => c - 1)}> - </button> Step: {step}{" "}
      <button onClick={() => setStep((c) => c + 1)}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - step)}> - </button> Count:{" "}
      {count} <button onClick={() => setCount((c) => c + step)}>+</button>
      <br />
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
