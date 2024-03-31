const express = require("express");
const zod = require('zod');
const app = express();
const port = 3000;

const inputSchema = zod.array(zod.number())

const { getFormattedDateTime } = require("./utils");

app.use(express.json());
app.use((req, res, next) => {
  const dataTime = getFormattedDateTime();
  console.log(`${req.method} : ${req.url} : ${dataTime}`);
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = inputSchema.safeParse(kidneys)
  // const kidneyLength = kidneys.length;

  // res.status(200).json({
  //   msg: `You have ${kidneyLength} kidney`,
  // });

  res.status(200).json({
    response
  })
});

app.use((err, req, res, next) => {
  res.status(501).json({
    msg: "sorry we are facing some internal issue !!",
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
