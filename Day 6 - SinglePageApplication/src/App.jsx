import { useState } from "react";
import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "bgDark" : "")}
        >
          Home
        </NavLink>
      </button>
      <button>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "bgDark" : "")}>Login</NavLink>
      </button>
      <button>
        <NavLink to="/signup" className={({ isActive }) => (isActive ? "bgDark" : "")}>Signup</NavLink>
      </button>
      <Outlet />
    </>
  );
}

export default App;
