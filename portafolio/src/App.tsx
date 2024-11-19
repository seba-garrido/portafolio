import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Experience from "./components/Experience";
import Proyect from "./components/Proyects";
import Contact from "./components/Contact";
import Project1 from "../src/proyects/Proyect1";
import "./styles/App.css";
import ProjectDetails from "./components/ProjectDetails"; // <Route path="/project/:id" element={<ProjectDetails />} />{" "} Importa el componente de detalles

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Experience />
                <Proyect />
                <Carousel />
                <Contact />
              </>
            }
          />
          <Route path="/project/1" element={<Project1 />} />
          {/* Ruta para el detalle */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
