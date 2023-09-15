import chevronHaut from "../../assets/chevronHaut.png";
import chevronBas from "../../assets/chevronBas.png";

function OpenClose(numOpen, isOpen, setIsOpen) {
  const laius = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logements et toutes les informations sont régulièremet vérifiées par nos équipes",
    "La bienvaillance fait partie des valeurs fondtrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienvaillance fait partie des valeurs fondtrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    " La sécurité est la priorité de Kasa. Aussi bien que nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers domestiques pour nos hôtes.",
  ];
  const titleTop = ["Fiabilité", "Respect", "Service", "Sécurité"];

  return isOpen ? (
    <div className="apropos-container">
      <div className="apropos-description">
        <span>{titleTop[numOpen]}</span>
        <img
          src={chevronBas}
          alt="chevron bas"
          onClick={() => setIsOpen(false)}
        ></img>
      </div>
      <div>
        <p>{laius[numOpen]}</p>
      </div>
    </div>
  ) : (
    <div className="apropos-container">
      <div className="apropos-description">
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
