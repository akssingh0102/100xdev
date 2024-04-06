import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <CustomButton />
      <CustomButton />
      <CustomButton />
      <CustomButton />
    </div>
  );
}

function CustomButton() {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  return <button onClick={onClickHandler}>{count}</button>;
}

export default App;
