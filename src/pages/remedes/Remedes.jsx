import React from "react";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import "./Remedes.css";
import Photos from "../../photos/Photos";

function Remedes() {
     const remedes =[
      {id:1, name:'La lumière', description:'Ampoules, bougies, feu, cheminée.'},
      {id:2, name:'Les miroirs', description:'Toutes les formes : carrées, rectangulaires, circulaires, octogonales.'},
      {id:3, name:'Le son', description:'Eau en mouvement, musique, cloche, carillon.'},
      {id:4, name:'Les animaux', description:'Chien, chat...'},
      {id:5, name:'Les plantes', description:'Crassula, bambou, plantes hautes, à feuilles rondes, non arbustives.'},
      {id:6, name:'Les objets lourds pour aider à la concentration et à l’ancrage', description:'Éléphant, grosses pierres.'},
      {id:7, name:'Les couleurs associées à la bonne zone', description:''},
      {id:8, name:'Les mobiles', description:'Carillon, voilage, ventilateur, cristal à facettes, tout objet qui se suspend.'},
      {id:9, name:'Les objets symboliques', description:'Tableaux de représentations qui véhiculent une symbolique.'},
      {id:10, name:'Tous les remèdes personnalisés qui sont adaptés à soi', description:''},      
    ] ;

    const remedeList=remedes.map((remede)=>(           
       <h3 key={remede.id}>
        {remede.name} <br />
        <p style={{fontWeight:'initial'}}>
          {remede.description} 
        </p> <br />
      </h3>      
   ) );
              
  return (
    <>         
      <section className="intro-remedes">
        <div className="box-les-remedes">
          <img className="img-remedes" src={Photos.remedes} alt="deco d'intérieur" />
        </div>
        <div className="contenair-remedes">
          <div className="picto-remedes">
            <img
              className="img-picto-remedes"
              src={Photos.pictoRemedes}
              alt="remedes"
            />
          </div>
          <h2 className="titre-remedes1">les remèdes</h2>
        </div>
        <div className="infos-remedes">
          <div className="para-remedes">
             <Paragraphe
            description="L’application des remèdes permet de trouver des solutions
            à des problèmes Feng  Shui. Elle modifie la circulation de l’énergie dans l’espace,
            déplace le Chi dans votre environnement pour apporter une énergie plus bénéfique
            dans votre habitat. "
          />  
          </div>
                
        </div>
       <div className="solutions-remedes">
          <div>{remedeList} </div>
       
       </div>
        <BandeauBases />
      </section>

     
    </>
  );
}

export default Remedes;
