import "../Css/Navbar.css"

const Menu = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navegar navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            <a className="nav-link active" aria-current="page" href="./login">Reservas</a>
            <a className="nav-link active" aria-current="page" href="menu">Menú</a>
            <a className="nav-link active" aria-current="page" href="#acerca-de">Acerca de</a>
            <a className="nav-link active" aria-current="page" href="#reseña">Reseñas</a>

          </div>
        </div>
      </div>
    </nav>

  )
}


export default Menu