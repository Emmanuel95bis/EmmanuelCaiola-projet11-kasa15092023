import "../styles/Home.css";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import logements from "../data/logements.json";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Banner SelectImage={"image1"} />
      <div className="home">
        {logements.map((logement) => (
          <div key={logement.id} className="home-container">
            <Link to={`/Fiche/${logement.id}`} className="link-to-fiche">
              <img src={logement.cover} alt={logement.title}></img>
            </Link>
            <div key={logement.id} className="home-text">
              {logement.title}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
