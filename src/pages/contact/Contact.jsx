import React from "react";
import "./Contact.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";

function Contact() {
  return (
    <>
      <section className="intro-contact">
        <div className="box-contact">
          <img className="img-contact" src={Photos.contact} alt="fleurs" />
        </div>

        <div className="contenair-contact">          
          <div className="box-praticienne">
            <img
              className="img-praticienne"
              src={Photos.delphine}
              alt="Delphine"
            />
            <span className="identite">Delphine Le Huu</span>
            
          </div>

          <div className="textes-infos">
            <Paragraphe description="Mes consultations en Feng Shui ont pour but de vous aider à vous sentir
             plus à l’aise et plus serein dans votre habitat et par conséquent dans votre vie." />
            <Paragraphe description="Harmoniser votre logement vous permettra de redynamiser votre vie
             et de dépasser certaines difficultés pour mener à bien vos projets. L’énergie stimulée
              vous apportera chance, bonheur, amour, santé et prospérité." />
            <Paragraphe description="J’apprécie particulièrement le Feng shui tibétain car il intègre
             une dimension psychologique et spirituelle." />
            <Paragraphe description="Votre bien-être est une chose qui me tient réellement à cœur
             et c’est dans cette voie que je me propose de vous accompagner." />
          </div>
        </div>

        <div className="rdv">
          <h3 className="titre-rdv">Prendre rendez-vous</h3>
          <h4 className="phone">06 13 75 48 86</h4>
          <h4 className="mail">contact@delphinelehuu.fr</h4> <br />
          <p className="texte-rdv">Au plaisir de vous rencontrer</p>
        </div>

        <BandeauBases />
      </section>
    </>
  );
}

export default Contact;
