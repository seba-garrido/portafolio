import { useParams } from "react-router-dom";
import "../styles/project1.css";

function Project1() {
  const { id } = useParams();

  return (
    <div className="container-project">
      <h1 className="titulo">Detalles del Proyecto</h1>
      <div className="image-container">
        {" "}
        {/* Contenedor de imágenes */}
        <img
          src="../../public/images/calendario1.png"
          className="images"
          alt="Qml"
        />
        <img
          src="../../public/images/calendario2.png"
          className="images"
          alt="Qml"
        />
        <img
          src="../../public/images/calendario3.jpg"
          className="images"
          alt="Qml"
        />
      </div>
      <video
        src="../../public/videos/demo_calendario.mov"
        controls
        className="d-block-video"
      />
    </div>
  );
}

export default Project1;
