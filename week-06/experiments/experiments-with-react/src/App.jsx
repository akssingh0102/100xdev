import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeadersWithButton/>
      <Text inputName={"Akash"}></Text>
      <br />
    </div>
  );
}



const HeadersWithButton = () => {
  const [name, setName] = useState("Akash");

  const changeName = () => {
    return setName(String(Math.random()));
  };

  return (
    <>
      <button type="button" onClick={changeName}>
        Click me
      </button>
      <br />
      <Text inputName={name}></Text>
      <br />
    </>
  );
};

const Text = ({ inputName }) => {
  return <div>My name is {inputName}</div>;
};

export default App;
