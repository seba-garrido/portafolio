import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Experience from "./components/Experience";
import Proyect from "./components/Proyects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <About />
      <Experience />
      <Proyect />
      <Carousel />
    </div>
  );
}

export default App;
