const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(1, req.url, req.body);
  if (req.headers["token"] || req.query.token) {
    const token = req.headers["token"] || req.query.token;
    // logic to check if token is valid
    next();
  } else {
    res.status(401).send("NOT LoggedIn");
  }
});

app.get("/:name/:module", (req, res) => {
  res.send(`
    <h1>${req.params.name}</h1>
    <h1>${req.params.module}</h1>
  `);
});

app.post("/protected", (req, res) => {
  res.send("Saved Successfully");
});

app.post("/api/v1/users/:id", (req, res) => {
    console.log(req.params.id)
  res.send("Saved Successfully");
});



app.listen(3333, () => console.log("Server listening at port 3333"));
