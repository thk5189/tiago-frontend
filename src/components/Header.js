import { Link } from "react-router-dom";

function Header(props) {
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
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
    </header>
  );
}

export default Header;





