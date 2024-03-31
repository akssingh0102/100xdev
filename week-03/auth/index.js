const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = ";Bg)SA&{YEec9=f599h!";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
  {
    username: "akash.singh@gmail.com",
    password: "12345",
    name: "Akash Singh",
  },
];

function userExists(username, password) {
  let doesUserExist = false;

  for (let i = 0; i < ALL_USERS.length; i++) {
    const user = ALL_USERS[i];

    if (user.username == username && user.password == password)
      doesUserExist = true;
  }

  return doesUserExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const authHeader = req.headers.authorization;
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    let userList = ALL_USERS.filter((user) => user.username != username);

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

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
});
