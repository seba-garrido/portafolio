import "../styles/contact.css";

function Contact() {
  return (
    <div id="contact" className="container-div">
      <div className="container-form">
        <form action="" className="formulario">
          <div className="form-nombre">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>
          <div className="form-email">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-text">
            <label className="form-label">Comentarios</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
