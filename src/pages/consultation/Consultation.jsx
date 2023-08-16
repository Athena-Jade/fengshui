import React from "react";
import "./Consultation.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";

function Consultation() {
  return (
    <>
      <section className="intro-consultation">
        <div className="img-consultation">
          <img src={Photos.consultation} alt="image zen" />
        </div>

        <div className="contenair-consultation">
          <div className="box-texte-consultation">
            <h2 className="titre-consultation">
              Comment se passe une consultation Feng Shui?
            </h2>
            <Paragraphe description="La consultation Feng Shui va se dérouler en plusieurs étapes :" />
            <Paragraphe
              description="Le premier contact se fera par téléphone ou par simple échanges d’emails.
              Je prendrai le temps de faire connaissance avec vous et je répondrai à vos questions et
              à vos attentes sur le Feng Shui. Puis, vous m’enverrez votre plan de maison afin que je
              l’étudie. A réception de votre document, je vous enverrai, si vous le souhaitez, un devis
              gratuit personnalisé pour l’expertise Feng Shui de votre habitat."
            />
            <Paragraphe
              description="Lors de la première visite, je vous expliquerai les règles
                de base du Feng Shui qui vous permettront de comprendre et d’appliquer facilement
                les recommandations. Puis, je ferai un tour de votre habitat et vous donnerai
                mes premières observations ainsi que les premiers remèdes à appliquer."
            />
            <Paragraphe
              description="Je vous enverrai ensuite un rapport détaillé dans
              un délai d’une à trois semaines. Vous y trouverez les recommandations 
              générales pièce par pièce que vous pourrez mettre en pratique facilement et à votre rythme."
            />
            <Paragraphe
              description="Lors de la seconde visite, nous reprendrons 
              ensemble la lecture du rapport Feng Shui et je prendrai le temps de répondre
              point par point aux questions que vous vous poserez."
            />
            <Paragraphe
              description="Je vous accompagnerai quand vous en aurez besoin
                sur certains choix d’aménagements et de décoration tout en respectant vos
                goûts personnels. Je prendrai également régulièrement de vos nouvelles pour
                mesurer et m’assurer du changement positif établi par le Feng Shui."
            />
          </div>
        </div>
        <BandeauBases />
      </section>
    </>
  );
}

export default Consultation;
