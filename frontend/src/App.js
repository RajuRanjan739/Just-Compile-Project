import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import Todo from "./component/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}

        <Routes>
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
