const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL);
const jwtPassword = process.env.JWT_PASSWORD;
const PORT = process.env.PORT || 3000;

const { User } = require("./models");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const { username, password, name } = req.body;

  let user = await User.findOne({ username: username });

  if (user) {
    return res.status(403).json({
      msg: "user already exist in db",
    });
  } else {
    user = await User.create({
      username,
      password,
      name,
    });

    return res.status(201).json({
      msg: "user created successfully",
      user,
    });
  }
});

app.post("/signin", async function (req, res) {
  const { username, password, name } = req.body;

  const user = await User.findOne({ username: username });

  if (!user) {
    return res.status(403).json({
      msg: "User doesn't exist in our in db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
    user,
  });
});

app.get("/users", async function (req, res) {
  const authHeader = req.headers.authorization;
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const users = await User.find({});

    let userList = users.filter((user) => user.username != username);

    return res.status(200).json({
      msg: "success",
      data: userList,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Internal server error !!",
    error: String(err),
  });

  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
