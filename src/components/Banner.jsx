import "../styles/Banner.css";
import KasaImage1 from "../assets/Kasaimage1.jpg";
import KasaImage2 from "../assets/Kasaimage2.jpg";

function Banner(props) {
  console.log(props);
  return (
    <div className="banner">
      {props.SelectImage === "image1" ? (
        <img src={KasaImage1} alt="Banner lac" className="img-banner" />
      ) : (
        <img src={KasaImage2} alt="Banner Montagne" className="img-banner" />
      )}

      <div className="text-banner">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
