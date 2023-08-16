import React from "react";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
//import Paragraphe1 from "../../composants/paragraphes/Paragraphe1";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import "./Chi.css";
import Photos from "../../photos/Photos";

function Chi() {
  return (
    <>
      <section className="intro-chi">
        <div className="box-le-chi">
          <img className="img-le-chi" src={Photos.leChiBan} alt="chi" />
        </div>

        <div className="contenair-chi">
          <div className="picto-chi">
            <img
              className="img-picto-chi"
              src={Photos.pictoChi}
              alt="picto chi"
            />
          </div>
          <h2 className="titre-chi2">Le chi</h2>
        </div>

        <div className="infos-chi">
          <div className="para-chi">
            <Paragraphe
              description="Le Chi est l’énergie qui nous entoure. Pour les chinois,
                le souffle du Chi est véhiculé par le vent (Feng) et l’eau (Shui). 
                Pour les tibétains, le Chi est l’âme humaine qui donne la vie, 
                le souffle qui permet de vivre. Le Feng Shui est l’art de maîtriser
                les courants d’énergie positive dans la maison. Il est important 
                de veiller à sa qualité et à sa vitesse de circulation en portant
                une attention particulière à l’entrée de l’habitat. Il circule en effet 
                d’une pièce à l’autre et nourrit tout l’espace grâce à un mouvement ondulatoire."
            />

            <Paragraphe
              description="L’écoulement du Chi dans tout notre environnement
              affecte chaque domaine de notre vie, influençant notre santé, notre 
              apparence et nos prises de décisions."
            />
            <Paragraphe
              description="Il est à son tour influencé par des éléments
                intérieurs et extérieurs de l’environnement physique comme les couleurs,
                les formes, le degré de propreté ou le désordre, l’éclairage, les objets
                et leurs arrangements, l’utilisation de l’espace. Tous ces éléments ont
                une incidence et déterminent ensemble l’écoulement du Chi dans votre habitation."
            />
          </div>

          <div className="box-img-chi">
            <img className="img-chi" src={Photos.chiSalon} alt="Chi dans le salon" />
          </div>
        </div>
        <BandeauBases />
      </section>
    </>
  );
}

export default Chi;
