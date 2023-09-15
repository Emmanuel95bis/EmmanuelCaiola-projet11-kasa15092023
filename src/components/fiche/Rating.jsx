import etoileGrise from "../../assets/etoilegrise.png";
import etoileRouge from "../../assets/etoilerouge.png";

function Rating(props) {
  const TheRating = parseInt(props.rate);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    const starImage = i < TheRating ? etoileRouge : etoileGrise;

    stars.push(
      <img
        key={i}
        src={starImage}
        alt={i < TheRating ? "Etoile rouge" : "Etoile grise"}
      />
    );
  }

  return <div>{stars}</div>;
}

export default Rating;
