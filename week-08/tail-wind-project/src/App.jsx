import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ backgroundColor: "red" }}>Hi</div>
      <div style={{ backgroundColor: "blue" }}>Hi</div>
      <div style={{ backgroundColor: "yellow" }}>Hi</div>
    </div>
  );
}

export default App;
