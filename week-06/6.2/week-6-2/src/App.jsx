import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {

    axios.get('https://sum-server.100xdevs.com/todos').then(
      (response)=> {
        setTodos(response.data.todos)
      }
    )
  }, [])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App;