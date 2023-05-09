const express = require("express");
const cors = require("cors");

const app = express();
const port = 3005;
const users = [];

app.use(express.json());
app.use(cors());

// GET POST PUT DELETE

app.get("/users", (req, res) => {
  console.log("Log GET Request");
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Log POST Request");
  console.log("BODY:", req.body);
  users.push(req.body);
  res.send("<h1>Hello from POST Request</h1>");
});

app.listen(port, () => {
  console.log("Server is running on Port: ", port);
});
