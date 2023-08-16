import React from "react";
import "./Atelier.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";

function Atelier() {
  const programme = [
    { id: 1, name: "Le Chi" },
    { id: 2, name: "L'importance du rangement" },
    { id: 3, name: "Les différentes écoles" },
    { id: 4, name: "Les animaux symboliques" },
    { id: 5, name: "Le Yin et le Yang" },
    { id: 6, name: "Le Ba Gua" },
    {
      id: 7,
      name: "Les 5 éléments : l’eau, le bois, le feu, la terre, le métal",
    },
    { id: 8, name: "La signification des couleurs" },
    {
      id: 9,
      name: "Les différentes zones du Ba Gua : carrière et chemin de vie, études et connaissance de soi, famille et santé financière, zone prospérité et abondance, enfants et créativité, bienfaiteurs et voyages, santé",
    },
    { id: 10, name: "Les remèdes Feng shui" },
    { id: 11, name: "Les toilettes et salle de bain" },
    { id: 12, name: "Les espaces manquants / extensions" },
    { id: 13, name: "Le pouvoir de l’intention" },
    { id: 14, name: "Les règles à appliquer" },
  ];
  const programmeList = programme.map((programme) => (
    <ul className="liste-programme" style={{ marginLeft: "2.20rem", paddingBottom:'0.25rem' }}>
      <li key={programme.id}>{programme.name}</li>
    </ul>
  ));

  return (
    <>
      <section className="intro-atelier">
        <div className="box-img-atelier">
          <img className="img-atelier" src={Photos.atelier} alt="salon" />
        </div>

        <div className="contenair-atelier">
          <div className="box-texte-atelier">
            <h2 className="titre-atelier">Atelier Feng Shui</h2>
            <Paragraphe description="Je vous propose un atelier qui vous permettra
             d’apprendre les règles de base du Feng Shui que vous pourrez mettre en pratique chez vous." />
            <Paragraphe description='Au programme de cet atelier, nous verrons :'/>
           
            {programmeList}
          </div>
        </div>

        <div className="infos-atelier">
          <div className="contenu-infos-atelier">
            <Paragraphe description="Je prendrai le temps de répondre à vos questions concernant le plan de votre maison." />
            <Paragraphe description="Ces ateliers seront organisés en fonction des demandes." />
            <Paragraphe description="Durée : 4h" />
            <Paragraphe description="Nombre de participants : de 2 à 4 personnes" />
            <Paragraphe description="Tarif par personne : 70€" />
            <Paragraphe description="Mode de paiement : chèque ou espèce" />
          </div>                
        </div>
        <BandeauBases />
      </section>
    </>
  );
}

export default Atelier;
