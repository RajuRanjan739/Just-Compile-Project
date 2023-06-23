const express = require("express");
require("./db/config.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const User = require("./db/user.js");

const Todo = require("./db/todo.js");

const app = express();

//MiddleWare

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

app.post("/todo", async (req, res) => {
  const { task } = req.body;
  const newTodo = new Todo({ task });

  try {
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000);
