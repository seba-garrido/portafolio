import { useNavigate } from "react-router-dom";
import "../styles/proyect.css";

function Proyect() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };
  return (
    <div id="proyect" className="div-container-proyect">
      <h1 className="titulo">Trabajos.</h1>
      <div className="div-proyect" onClick={() => handleProjectClick(1)}>
        <h2 className="proyects">App Movil</h2>
        <div className="image-container">
          <img
            src="../../public/images/qml.svg"
            className="d-block"
            alt="Qml"
          />
          <img
            src="../../public/images/sqlite.svg"
            className="d-block"
            alt="Sqlite"
          />
          <img
            src="../../public/images/python2.svg"
            className="d-block"
            alt="Javascript"
          />
          <img
            src="../../public/images/css2.svg"
            className="d-block"
            alt="Css"
          />
          <img
            src="../../public/images/html5.svg"
            className="d-block"
            alt="Html"
          />
        </div>
      </div>
      <div className="div-proyect" onClick={() => handleProjectClick(2)}>
        <h2 className="proyects">App movil 2</h2>
        <div className="image-container">
          <img
            src="../../public/images/qml.svg"
            className="d-block"
            alt="Qml"
          />
          <img
            src="../../public/images/sqlite.svg"
            className="d-block"
            alt="Sqlite"
          />
          <img
            src="../../public/images/python2.svg"
            className="d-block"
            alt="Javascript"
          />
          <img
            src="../../public/images/css2.svg"
            className="d-block"
            alt="Css"
          />
          <img
            src="../../public/images/html5.svg"
            className="d-block"
            alt="Html"
          />
        </div>
      </div>
      <div className="div-proyect" onClick={() => handleProjectClick(3)}>
        <h2 className="proyects">App Web</h2>
        <div className="image-container">
          <img
            src="../../public/images/qml.svg"
            className="d-block"
            alt="Qml"
          />
          <img
            src="../../public/images/sqlite.svg"
            className="d-block"
            alt="Sqlite"
          />
          <img
            src="../../public/images/python2.svg"
            className="d-block"
            alt="Javascript"
          />
          <img
            src="../../public/images/css2.svg"
            className="d-block"
            alt="Css"
          />
          <img
            src="../../public/images/html5.svg"
            className="d-block"
            alt="Html"
          />
        </div>
      </div>
    </div>
  );
}

export default Proyect;
