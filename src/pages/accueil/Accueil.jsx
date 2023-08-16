import React from "react";
import "./Accueil.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
//import Paragraphe1 from "../../composants/paragraphes/Paragraphe1";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";
function Accueil() {
  return (
    <>
      <section className="intro-fengShui">
        <div className="image-accueil">
          <img src={Photos.homeBan} alt="salon" />
        </div>
        <div className="bcg-intro">
          <div className="contenair-fs">
            <div className="box-texte">
              <Paragraphe
                description="Pour assurer notre bien-être,
              il est important de se sentir bien chez soi."
              />
              <Paragraphe
                description="À ce titre, l’harmonisation de
             l’habitat selon le Feng Shui permet de créer une 
             circulation fluide des énergies dans toutes 
             les pièces pour favoriser un sentiment naturel de bien-être."
              />
              <Paragraphe
                description="Rien qu’en suivant les règles de base du Feng Shui
            , vous pourrez déjà ressentir certains bénéfices. Au-delà du bien-être,
             certains aménagements pourront même changer votre vie."
              />
              <Paragraphe
                description="Par exemple, en positionnant dans votre
              environnement des objets qui reflètent vos intérêts ou vos désirs,
              comme un beau galet que vous avez ramassé sur une belle plage ou à la montagne,
              un souvenir de vacances, une photo de vos proches, un parfum d’ambiance,
              ou de la musique… vous favoriserez certaines réalisations dans votre vie personnelle."
              />
              <Paragraphe
                description="En faisant ces changements, dont le Feng Shui vous révélera les secrets,
             vous verrez des effets positifs arriver dans votre vie."
              />
            </div>
            <div className="box-img-fs">
              <h2 className="titre-bien-etre">Le bien-être par le Feng Shui</h2>

              <img
                className="img-home"
                src={Photos.homeIllustration}
                alt="maison"
              />
            </div>
          </div>
          <div className="ckoi-fs">
            <img
              className="img-lotus"
              src={Photos.homeLotus}
              alt="fleur lotus"
            />
            <div className="contenair-ckoi-fs">
              <div className="box-gauche">
                <h2 className="titre-ckoi-fs">Qu'est ce que le Feng Shui?</h2>
                <Paragraphe
                  description="Le Feng Shui est un art millénaire d’origine chinoise
                qui a pour but d’harmoniser l’énergie environnementale d’un lieu de manière
                à favoriser la santé, le bien-être et la prospérité de ses occupants.
                Il signifie le vent et l’eau."
                />
                <Paragraphe
                  description="C’est l’art du positionnement, c’est l’art de se placer
                sous de bonnes influences. La manière dont vous disposez vos meubles, tous les
                  objets que vous possédez mais aussi l’architecture et le positionnement de
                   votre habitat ont un effet déterminant sur chacun des aspects de votre existence."
                />
              </div>
              <div className="box-droite">
                <h2 className="titre-bienfait-fs">
                  Que peut m’apporter le Feng Shui ?
                </h2>
                <Paragraphe
                  description="Une étude Feng Shui permet de déterminer les points forts
               et les points faibles de votre habitat. Elle apporte des solutions pour améliorer
                les secteurs de vie qui ont besoin d’amélioration en rapport à ce que vous désirez
                 dans votre vie. En créant un habitat harmonieux, vous vous sentirez serein et heureux."
                />
                <Paragraphe
                  description="Tout ce que vous entreprendrez sera plus facile. Lorsque toutes
               ces étapes sont réalisées avec de l’intention, des changements s’opèrent naturellement dans votre vie."
                />
              </div>
            </div>
          </div>
        
          <div className="bases-fs">
            <div className="contenair-bases-fs">
              <div className="box-bases-gauche">
                <h2 className="titre-bases-fs">Les bases du Feng Shui</h2>
                <div className="box-img-bases">
                  <img
                    src={Photos.salon}
                    alt="salon"
                    className="img-bases"
                  />
                  <Paragraphe
                    description="La pratique du Feng Shui dans son habitat a
                pour but d’harmoniser l’énergie du lieu de manière à favoriser la santé,
                le bien-être et la prospérité de ses occupants."
                  />
                </div>
              </div>
              <div className="box-bases-droite">
                <Paragraphe
                  description="Le Feng Shui part du principe que le Chi,
                l’énergie vitale ou universelle, doit circuler librement et sans
                entrave autour et à l’intérieur du logement. D’où l’importance
                 de faire du tri et du rangement régulièrement pour favoriser
                  une bonne circulation dans son intérieur."
                />
                <Paragraphe description="Le Feng Shui divise l’habitat en plusieurs zones qui correspondent à des domaines de vie. Vous trouverez : la carrière, les études et connaissance de soi, la famille, la prospérité, la réputation, les couples et relation, la créativité et les enfants, les bienfaiteurs et les voyages ainsi que la santé. " />
                <Paragraphe description="En activant ces zones selon les règles du Feng Shui, qui peuvent concerner le positionnement à des endroits précis de certaines couleurs, de sons, d’un éclairage, de plantes et autres éléments de décoration, vous allez attirer la chance et créer des conditions favorables pour votre bien-être et votre réussite." />
              </div>
            </div>
          </div>
         
        </div>
        <BandeauBases />
      </section>
    </>
  );
}

export default Accueil;
