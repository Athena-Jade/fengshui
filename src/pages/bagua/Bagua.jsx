import React from "react";
import "./Bagua.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";

function Bagua() {
  return (
    <>     
      <section className="intro-bagua">
        <div className="box-le-bagua">
          <img className="img-bagua" src={Photos.portailBagua} alt="bagua" />
        </div>

        <div className="contenair-bagua">
          <div className="picto-bagua">
            <img
              className="img-picto-bagua"
              src={Photos.pictoBagua}
              alt="bagua"
            />
          </div>
          <h2 className="titre-bagua">Le Bagua</h2>
        </div>

        <div className="infos-bagua">
          <div className="para-bagua">
            <Paragraphe description="Le Ba Gua est l’un des outils essentiels de l’analyse du Feng Shui. " />
            <Paragraphe description="C’est une carte énergétique qui, posée sur la maison, la divise en neuf parties correspondant chacune à un domaine de vie : carrière, connaissance de soi et éducation, famille et santé financière, prospérité, réputation, couple et relations, enfants et créativité, voyages et bienfaiteurs." />
            <Paragraphe description=" Le centre symbolise le « Tao » ou l’équilibre et représente la santé et l’harmonie, c’est-à-dire notre être dans sa globalité." />
          </div>

          <div className="box-img-bagua">
            <img
              className="img-bagua"
              src={Photos.bagua}
              alt="bagua"
            />
          </div>
          
        </div>
        <BandeauBases />
      </section>

     
    </>
  );
}

export default Bagua;
