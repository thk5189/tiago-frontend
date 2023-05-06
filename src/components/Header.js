import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  // Define the dark mode and light mode images
  const darkModeImage = "https://i.imgur.com/ID3JsQw.png";
  const lightModeImage = "https://i.imgur.com/hB2vbiK.png";

  // Define the initial mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle function
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  }

  // Get the current mode image URL
  const modeImage = isDarkMode ? darkModeImage : lightModeImage;

  // Define the styles for the mode switch image
  const modeImageStyles = {
    cursor: "pointer",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        TK.
      </Link>
      <nav className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      {/* Mode switch image */}
      <div style={modeImageStyles} onClick={toggleDarkMode}>
        <img src={modeImage} alt="Mode Switch" style={{ width: "70%" }} />
      </div>
    </header>
  );
}

export default Header;
