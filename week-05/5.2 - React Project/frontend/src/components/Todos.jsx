export function Todos({ todos }) {

  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1 >{todo.title}</h1>
            <h2 >{todo.description}</h2>
            <button type="button">
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
