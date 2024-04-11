import { useState } from "react";

const initialTodos = [
  {
    id: 1,
    title: "go to gym",
    description: "go to gym today",
  },
  {
    id: 2,
    title: "go to office",
    description: "go to office today",
  },
  {
    id: 3,
    title: "go to club",
    description: "go to club today",
  },
];

let idCount = 4;

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: idCount,
        title: "go to park",
        description: "go to park today",
      },
    ]);

    console.log(`Counter value is ${idCount}`);
    idCount = idCount + 1;
  };

  return (
    <>
    <button type="button" onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}></Todo>
      ))}
    </>
  );
}

const Todo = ({ title, description, id }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

export default App;
