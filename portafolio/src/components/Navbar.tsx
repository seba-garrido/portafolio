import "../styles/navbar.css";

function Navbar() {
  return (
    <div id="navbar" className="navbar-container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#experience">
            Experiencia
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#proyect">
            Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
