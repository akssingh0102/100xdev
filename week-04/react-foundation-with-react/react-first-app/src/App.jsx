import { useState } from "react";
import "./App.css";

const getRandomNumber = () => {
  return Math.round(Math.random() * 10);
};

function App() {
  const [count, setCount] = useState(0);
  const [rand, setRand] = useState(getRandomNumber());

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setRand(() => getRandomNumber())}>
          Random number is {rand}
        </button>
      </div>
    </>
  );
}

export default App;
