import { useParams } from "react-router-dom";
import "../styles/projectDetails.css";

function ProjectDetails() {
  const { id } = useParams();

  // Puedes usar el ID para cargar los datos específicos del proyecto
  return (
    <div className="container-project">
      <h1 className="titulo">Detalles del Proyecto</h1>
      <img src="../../public/images/arauco1.png" className="images" alt="Qml" />
      <img src="../../public/images/arauco2.png" className="images" alt="Qml" />
      <img src="../../public/images/arauco3.png" className="images" alt="Qml" />
      <video
        src="../../public/videos/demo_calendario.mov"
        controls // Permite los controles de reproducción
        className="d-block-video"
      />
    </div>
  );
}

export default ProjectDetails;
