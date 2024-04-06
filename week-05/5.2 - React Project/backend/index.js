const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  const { title, description } = req.body;

  const createdTodo = await todo.create({
    title,
    description,
  });

  res.status(201).json({ msg: "todo created", data: createdTodo });
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  let msg = "success";
  if (!todos) {
    msg = "No todo is present";
  }

  res.status(200).json({ msg, data: todos });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  const { id } = req.body;

  const todoData = await todo.updateOne({ _id: id }, { completed: true });

  res.status(200).json({ msg: "updated todo", data: todoData });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
