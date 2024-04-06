import "./App.css";
import { useState } from "react";

const initialTodoState = [
  {
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false,
  },
  {
    title: "Study DSA",
    description: "Study DSA from 9-11",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodoState);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: "Eat Food",
        description: "Eat food 3 times a day",
        completed: true,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <Todo
          title={todo.title}
          description={todo.description}
          key={index}
        ></Todo>
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
