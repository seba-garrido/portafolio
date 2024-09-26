import "../styles/proyect.css";

function Proyect() {
  return (
    <div className="div-container-proyect">
      <h1 className="titulo">Trabajos.</h1>
      <div className="div-proyect">
        <h2 className="proyects">App Movil</h2>
        <button className="preview" type="button">
          DEMO
        </button>
        <button className="code" type="button">
          CODE
        </button>
      </div>
      <div className="div-proyect">
        <h2 className="proyects">App movil 2</h2>
        <button className="preview" type="button">
          DEMO
        </button>
        <button className="code" type="button">
          CODE
        </button>
      </div>
      <div className="div-proyect">
        <h2 className="proyects">App Web</h2>
        <button className="preview" type="button">
          DEMO
        </button>
        <button className="code" type="button">
          CODE
        </button>
      </div>
    </div>
  );
}

export default Proyect;
