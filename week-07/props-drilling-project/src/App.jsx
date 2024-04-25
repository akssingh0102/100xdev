import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </>
  );
}

const Count = ({ count }) => {
  return <div>{count}</div>;
};

const Buttons = ({ count, setCount }) => {
  return (
    <>
      <button
        type="button"
        style={{ margin: "10px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        type="button"
        style={{ margin: "10px" }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};
export default App;
