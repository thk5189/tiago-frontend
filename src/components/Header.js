// import { Link } from "react-router-dom";


// function Header(props) {
//   return (

// <header class="header">
// <a href="#" class="logo">Tiago.</a>
// <nav class="navbar">
//     <a href="" class="active">Home</a>
//     <a href="">About</a>
//     <a href="">Projects</a>
//     <a href="">Contact</a>
// </nav>
// </header>
//   )
// }
// export default Header;

import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Tiago.
      </Link>
      <nav className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

