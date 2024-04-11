import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="header_navbar">
        <Link to="/"><h4>Adveture Trails FD</h4></Link>
        <div className="link_header">
          <Link to="/trilhas">Explorar Trilhas</Link>
          <Link to="/cadastro-trilhas">Cadastrar trilhas</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
