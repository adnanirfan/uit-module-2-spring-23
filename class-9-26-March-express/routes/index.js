var express = require("express");
var router = express.Router();

var todos = [];

// CRUD - Create Read Update Delete

router.post("/", function (req, res, next) {
  console.log("DATA => ", req.body);
  todos.push(req.body);
  res.json(todos);
});

router.put("/update/:id", function (req, res, next) {
  console.log("DATA => ", req.params.id);
  // todos.push(req.body);
  res.json(todos);
});

router.get("/", async function (req, res, next) {
  const obj = { name: "Adnan", class: "M2" };

  // DB call
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(obj), 5000);
  });

  res.json(result);
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
