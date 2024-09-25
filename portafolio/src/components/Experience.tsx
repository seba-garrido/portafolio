import "../styles/experience.css";

function Experience() {
  return (
    <div id="experience" className="div-container">
      <h1 className="tittle">Experiencia.</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <p>Aug. 2022 - Mar. 2023</p>
          <h1>Software Developer</h1>
          <h4>Geodev Spa.</h4>
          <p>
            Desarrollo de una aplicación movil para una empresa forestal tipo
            calendario.
          </p>
        </li>
        <li className="list-group-item">
          <p>Jan. 2021 - Mar. 2021</p>
          <h1>Practica Profesional</h1>
          <h4>Ingenieria y construccion Sigdo Koppers.</h4>
          <p>
            Desarrollo de una aplicación web tipo carrusel, para mostrar
            distintos dashboards de PowerBI.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
