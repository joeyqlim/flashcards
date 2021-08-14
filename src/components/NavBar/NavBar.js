import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="nav-brand">just flashcards</div>
        <button className="theme-toggle-btn" onClick={() => toggleTheme()}>
          🌓
        </button>
        <label className="switch">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => toggleTheme()}
          />
          <span className="toggle-thumb">
            <div className="icons">
              <div className="moon">🌙</div>
              <div className="sun">☀️</div>
            </div>
          </span>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
