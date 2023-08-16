import React from "react";
import "./Qui.css/";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";
function Qui() {
  return (
    <>
      <section className="qui-suis-je">
        <div className="bcg-qui">
       
          <h1 className="qui">Qui suis-je?</h1>
          <div className="identites">
            <div className="qui-gauche">
              <img
                className="img-delphine2"
                src={Photos.delphine}
                alt="portrait Delphine Le Huu"
              />
            </div>
            <div className="qui-droite">
              <h2 className="nom-prenom">Delphine Le Huu</h2>
              <h3 className="profession">
                Consultante et formatrice en Feng Shui <br />
                Psychopraticienne en thérapie brève
              </h3>
              <h3 className="adresse">
                7 boulevard Victor Hugo <br />
                78300 Poissy
              </h3>
              <h3 className="telephone">06 13 75 48 86</h3>
              <h3 className="mail">contact@delphinelehuu.fr</h3>
            </div>
          </div>
        
        <div className="discours">
          <Paragraphe
            description="J'ai découvert le Feng shui il y a environ 20 ans.
            Intéressée et curieuse, j'ai décidé de faire une formation pour pouvoir
            le mettre en pratique dans mon appartement. J'ai tout de suite ressenti
            un bien-être et vu des changements dans ma vie.
          "
          />
          <Paragraphe
            description="Il y a environ 5 ans, j'ai décidé de quitter
           la société dans laquelle je travaillais, pour me reconvertir dans la relation d'aide"
          />
          <Paragraphe
            description="J'ai alors commencé un chemin de développement personnel.
            Je me suis formée en tant que consultante en Feng Shui, puis en tant que psychopraticienne
            en thérapie brève.
          "
          />

          <Paragraphe
            description="Mes consultations en Feng Shui ont pour but de
            vous aider à vous sentir plus à l'aise et plus serein dans votre habitat 
            et par conséquent dans votre vie "
          />

          <Paragraphe
            description="Harmoniser votre logement vous permettra de redynamiser 
            votre vie et de dépasser certaines difficultés pour mener à bien vos projets.
            L'énergie stimulée vous apportera chance, bonheur, amour, santé et prospérité."
            
          />

          <Paragraphe
            description="J'apprécie particulièrement le Feng Shi tibétain car
            il intègre une dimension psychologique et spirituelle."
          
          />
          <Paragraphe
            description="Votre bien-être est une chose qui me tient réellement à coeur
            et c'est dans cette voie que je me propose de vous accompagner. "
          
          />
        </div>
        </div>
        <BandeauBases />
      </section>
    </>
  );
}

export default Qui;
