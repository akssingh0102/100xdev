import { useState } from "react";

function App() {
  return (
    <>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </>
  );
}

const TextComponent = () => {
  return <>Hi There</>;
};

const CardWrapper = ({ children }) => {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
};

export default App;
