import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateToDo";
import { Todos } from "./components/Todos";
import axios from "axios";

async function fetchInitialTodos() {
  const response = await axios.get("http://127.0.0.1:3000/todo");
  return response.data.data;
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchInitialTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  return (
    <>
      <CreateTodo setTodos={setTodos} todos={todos}></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  );
}

export default App;
