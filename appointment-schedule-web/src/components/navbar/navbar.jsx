import "./navbar.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
    return <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

    <div className="container-fluid"> 

      <Link className="navbar-brand" to="/appointments">
        <img className="logo" src={logo} />
      </Link>


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSuportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSuportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item"> <Link className="nav-link active" to="/appointments">Agendar Consulta</Link></li>
          <li className="nav-item"> <Link className="nav-link active" to="/doctor">Médicos</Link></li>
        </ul> 

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Perfil
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="#">Meu Perfil</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><Link className="dropdown-item" to="/login">Sair</Link></li>
              </ul>
            </div>
          </li>
        </ul>

      </div>



    </div>
  </nav>
}

export default Navbar 