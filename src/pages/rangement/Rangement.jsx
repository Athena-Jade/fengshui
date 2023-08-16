import React from "react";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import "./Rangement.css";
import Photos from "../../photos/Photos";

function Rangement() {
  return (
    <>
      <section className="le-rangement">
       
      </section>

      <section className="intro-rangement">
         <div className="box-le-rangement">
          <img className="img-rangement"
           src={Photos.rangement} alt="rangement" />
        </div>
        <div className="contenair-rangement">
          <div className="picto-rangement">
            <img
              src={Photos.pictoRangement}
              alt="rangement"
              className="img-picto-rangement"
            />
          </div>
          <h2 className="titre-rangement1">Le rangement</h2>
        </div>

        <div className="infos-rangement">
          <div className="para-rangement">
            <Paragraphe description="Quand le désordre s’accumule, l’énergie stagne.
             Une énergie saine doit pouvoir circuler." />
            <Paragraphe description="Les objets accumulés pèsent sur vous, littéralement
             comme au sens figuré. Un espace rempli de possessions inutiles vous ralentit
              dans la vie, vous empêche de progresser et d’évoluer." />
            <Paragraphe description="Un placard encombré empêche l’énergie de circuler librement.
             Interrogez-vous sur l’utilité de chaque chose et faites un tri dans vos vêtements, 
             votre linge de maison et vos chaussures. Vous pouvez même faire une bonne action en
              les donnant à des associations comme Emmaüs ou le Secours Populaire." />
            <Paragraphe description="Un objet qui ne vous a pas servi depuis longtemps 
            ne vous sera vraisemblablement plus d’aucune utilité. Il est préférable de vous en séparer. " />
            <Paragraphe description="Lorsque vous vous débarrassez de toutes les choses
             qui n’ont plus véritablement de signification dans votre vie, vous vous
              sentez alors plus léger de corps et d’esprit." />
            <Paragraphe description="Tout élément en mauvais état de fonctionnement pose
             un problème en Feng Shui. Tout ce qui est défectueux dans votre environnement
              génère une énergie de décomposition. Si vous avez des objets qui ne marchent
              pas correctement, vous devez les jeter ou les réparer au plus vite." />
          </div>
        </div>
        <BandeauBases />
      </section>

      
    </>
  );
}

export default Rangement;
