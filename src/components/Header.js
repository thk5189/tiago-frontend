import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
  return (
    <header>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
      </nav>

    </header>
  );
}

export default Header;
