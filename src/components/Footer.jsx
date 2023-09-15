import "../styles/Footer.css";
import logoblanc from "../assets/logoblanc.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logoblanc} alt="logo kasa blanc"></img>
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
export default Footer;
