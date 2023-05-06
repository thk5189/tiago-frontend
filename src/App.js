import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hire from "./pages/Hire";

function App() {
  
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  // const URL = "http://localhost:4000/";
  const URL = "https://tiago-backend.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects URL={URL} />} />
        <Route exact path="/hireme" element={<Hire />} />
      </Routes>
      {/* <About URL={URL} />  */}
      <Footer />
    </div>
  );
}

export default App;

//notes for more styling 
//styled components for global use ex: gores homes app
//https://michalsnik.github.io/aos/
//https://github.com/michalsnik/aos
