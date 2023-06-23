import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
        setTask("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* <Nav /> */}
      <div className="nav-ul">
        <button className="logout-button">Logout</button>
      </div>

      <h1>All Notes</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todo;
