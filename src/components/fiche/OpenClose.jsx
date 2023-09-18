import chevronHaut from "../../assets/chevronHaut.png";
import chevronBas from "../../assets/chevronBas.png";

function OpenClose(numOpen, selectedLogement, isOpen, setIsOpen) {
  const titleTop = ["Description", "Équipements"];

  return isOpen ? (
    <div className={numOpen === 1 ? "fiche-equipements" : "fiche-description"}>
      <div className="fiche-description-title">
        <span>{titleTop[numOpen]}</span>
        <img
          src={chevronBas}
          alt="chevron bas"
          onClick={() => setIsOpen(false)}
        ></img>
      </div>
      {numOpen === 0 ? (
        <p>{selectedLogement.description}</p>
      ) : (
        <ul>
          {selectedLogement.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <div
      className={numOpen === 1 ? "fiche-equipements2" : "fiche-description2"}
    >
      <div className="fiche-description-title">
        <span>{titleTop[numOpen]}</span>
        <img
          src={chevronHaut}
          alt="chevron haut"
          onClick={() => setIsOpen(true)}
        ></img>
      </div>
    </div>
  );
}

export default OpenClose;
