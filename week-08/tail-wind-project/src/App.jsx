import { useState } from "react";
import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-4">
      <RevenueCard
        title={"Amount Pending"}
        warning={"Warning"}
        orderCount={13}
        amount={"92312.20"}
      />
    </div>
  );
}

export default App;
