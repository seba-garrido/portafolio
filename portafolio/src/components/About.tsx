import "../styles/About.css";
function About() {
  return (
    <div id="about" className="about-container">
      <p className="p-welcome">Hola, Bienvenido/a</p>
      <h1 className="me-info">
        <i>Soy Sebastian Garrido</i>
      </h1>
      <p className="p-titulo">
        Ingeniero civil en informatica y telecomunicaciones & Desarrollador de
        Software
      </p>

      <div className="div-presentacion">
        <h1 className="me-about">Sobre Mi.</h1>
        <p className="p-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="https://www.linkedin.com/in/seba-garrido" target="_blank">
          <button className="boton" type="button">
            Linkedin
          </button>
        </a>
        <a href="https://github.com/seba-garrido" target="_blank">
          <button className="boton" type="button">
            Github
          </button>
        </a>
        <a
          href="https://www.hackerrank.com/profile/sebastian_garri1"
          target="_blank"
        >
          <button className="boton" type="button">
            HackerRank
          </button>
        </a>
        <a href="../../public/CV.pdf" download>
          <button className="boton" type="button">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
