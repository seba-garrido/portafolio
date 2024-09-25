import "../styles/carousel.css";

function Carousel() {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <div className="carousel-images">
            <img src="/images/python.svg" className="d-block" alt="Python" />
            <img src="/images/react.svg" className="d-block" alt="React" />
            <img
              src="/images/javascript.svg"
              className="d-block"
              alt="Javascript"
            />
            <img src="/images/html5.svg" className="d-block" alt="Html" />
            <img src="/images/css.svg" className="d-block" alt="Css" />
            <img src="/images/mysql.svg" className="d-block" alt="MySql" />
            <img src="/images/django.svg" className="d-block" alt="Django" />
            <img
              src="/images/postgresql.svg"
              className="d-block"
              alt="Postgresql"
            />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="/images/html5.svg" className="d-block" alt="Html" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="/images/css.svg" className="d-block" alt="Css" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="/images/mysql.svg" className="d-block" alt="MySql" />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="/images/postgresql.svg"
            className="d-block"
            alt="Postgresql"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="/images/django.svg" className="d-block" alt="Django" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
