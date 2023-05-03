// import { Link } from "react-router-dom";
// import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <a href="/" className="logo">
        Tiago.
      </a>
      <nav className="navbar">
        <a href="/" className="active">
          Home
        </a>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
}

export default Header;






