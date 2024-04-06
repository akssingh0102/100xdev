# MERN Todo App

A simple todo application built using the MERN stack.

## Features

- Create, read, update, and delete todos.
- Mark todos as complete/incomplete.
- Filter todos by status (all, complete, incomplete).

## Technologies Used

- MongoDB: NoSQL database for storing todos.
- Express.js: Web framework for Node.js used for handling backend logic.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime environment for running JavaScript on the server.

## Setup

1. Navigate to the project directory: `cd mern-todo-app`
2. Install dependencies:
   - Backend: `cd backend && npm install`
   - Frontend: `cd frontend && npm install`
3. Set up the MongoDB database:
   - Create a `.env` file in the `backend` directory.
   - Add your MongoDB connection string as `MONGODB_URI`.
4. Start the backend server: `cd backend && npm start`
5. Start the frontend server: `cd frontend && npm start`
6. Open `http://localhost:3000` in your browser to view the app.

## Folder Structure
```
mern-todo-app/
├── backend/ # Backend Node.js Express server
└── frontend/ # Frontend React.js application
```


## API Endpoints

- `GET /api/todos`: Get all todos.
- `POST /api/todos`: Create a new todo.
- `PUT /api/todos/:id`: Update a todo by ID.
- `DELETE /api/todos/:id`: Delete a todo by ID.

## License

This project is licensed under the MIT License - see the [LICENSE](____LICENSE____) file for details.