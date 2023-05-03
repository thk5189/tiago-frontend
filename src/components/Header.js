// import { Link } from "react-router-dom";
// import './Header.css';

function Header(props) {
  return (
    // <header>
    //   <nav>
    //     <Link to="/">HOME</Link>
    //     <Link to="/about">ABOUT</Link>
    //     <Link to="/projects">PROJECTS</Link>
    //   </nav>

    // </header>
      <header class="header">
      <a href="" class="logo">Tiago.</a>
      <nav class="navbar">
          <a href="" class="active">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
      </nav>
  </header>
  );
}

export default Header;
