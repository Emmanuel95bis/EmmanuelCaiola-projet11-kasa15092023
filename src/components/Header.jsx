import "../styles/Header.css";
import logorouge from "../assets/logorouge.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logorouge} alt="Logo Kasa"></img>
      <div className="header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A Propos</Link>
      </div>
    </div>
  );
}
export default Header;
