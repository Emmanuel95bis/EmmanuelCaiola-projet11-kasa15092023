import React, { useState } from "react";
import "../../styles/Fiche.css";
import Header from "../Header";
import logements from "../../data/logements.json";
import Footer from "../Footer";
import Tags from "../fiche/Tags";
import Rating from "../fiche/Rating";
import Error from "./Error";
import chevronDroit from "../../assets/chevronDroit.png";
import chevronGauche from "../../assets/chevronGauche.png";
import { useParams } from "react-router-dom";
import OpenClose from "../fiche/OpenClose";

function Fiche() {
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const { ident } = useParams();

  const selectedLogement = logements.find((logement) => logement.id === ident);

  const [position, setPosition] = useState(0);
  if (selectedLogement === undefined) {
    return <Error />;
  }

  const selectedPictures = selectedLogement ? selectedLogement.pictures : [];

  const nameFirstName = selectedLogement.host.name.split(" ");

  const previousPicture = () => {
    setPosition((prevPosition) =>
      prevPosition === 0 ? selectedPictures.length - 1 : prevPosition - 1
    );
  };

  const nextPicture = () => {
    setPosition((prevPosition) =>
      prevPosition === selectedPictures.length - 1 ? 0 : prevPosition + 1
    );
  };

  return (
    <div>
      <Header />
      {selectedLogement && (
        <div className="fiche">
          <div className="fiche-image">
            <img src={selectedPictures[position]} alt="logement" />
            <img
              src={chevronGauche}
              alt="chevron gauche"
              onClick={previousPicture}
            />
            <img src={chevronDroit} alt="chevron droit" onClick={nextPicture} />
            <span>
              {position + 1}/{selectedPictures.length}
            </span>
          </div>

          <div key={selectedLogement.id}>
            <div className="fiche-title-owner">
              <h1>{selectedLogement.title}</h1>
              <div className="fiche-name-img">
                <div className="fiche-name">
                  {nameFirstName.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>

                <img
                  src={selectedLogement.host.picture}
                  alt={`Le propriétaire est ${selectedLogement.host.name}`}
                  onClick={nextPicture}
                />
              </div>
            </div>
            <span>{selectedLogement.location}</span>
            <div className="fiche-tags-rating">
              <Tags tags={selectedLogement.tags} />
              <Rating rate={selectedLogement.rating} />
            </div>

            <div className="fiche-details">
              {OpenClose(0, selectedLogement, isOpen5, setIsOpen5)}
              {OpenClose(1, selectedLogement, isOpen6, setIsOpen6)}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Fiche;
