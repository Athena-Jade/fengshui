import React from "react";
import "./Livret.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import { BiSolidCircle } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import Photos from "../../photos/Photos";
function Livret() {
  const plan = [
    { id: "1", name: "Le Feng Shui" },
    { id: "2", name: "Le Chi" },
    { id: "3", name: "Le Yin et le Yang" },
    { id: "4", name: "Le Rangement" },
    { id: "5", name: "Les 5 éléments" },
    { id: "6", name: "Le Ba Gua" },
    { id: "7", name: "Les remèdes" },
    { id: "8", name: "Les conseils" },
  ];

  const listPlan = plan.map((plan) => (
    <ul className="liste-plan">
      <li key={plan.id}>{plan.name}</li>
    </ul>
  ));

  const piece = [
    { id: "1", name: "Le plan" },
    { id: "2", name: "L'analyse du plan" },
    { id: "3", name: "L'entrée" },
    { id: "4", name: "La cuisine" },
    { id: "5", name: "Le salon et la salle à manger" },
    { id: "6", name: "Le salon" },
    { id: "7", name: "La salle à manger" },
    { id: "8", name: "La chambre 1" },
    { id: "9", name: "La chambre 2" },
    { id: "10", name: "La chambre 3" },
  ];

  const listPiece = piece.map((piece) => (
    <ul className="liste-piece">
      <li key={piece.id}>{piece.name}</li>
    </ul>
  ));

  const secteur1 = [
    { id: "1", name: "Carrière" },
    { id: "2", name: "Travail" },
    { id: "3", name: "Chemin de vie" },
    { id: "4", name: "Orientation professionnelle" },
  ];

  const listSecteur1 = secteur1.map((secteur1) => (
    <ul>
      <li key={secteur1.id}>{secteur1.name}</li>
    </ul>
  ));

  const couleur1 = [
    { id: "1", name: "Bleu" },
    { id: "2", name: "Noir" },
    { id: "3", name: "Gris" },
    { id: "4", name: "Or" },
    { id: "5", name: "Argent" },
    { id: "6", name: "Doré" },
    { id: "7", name: "Blanc" },
  ];
  const listCouleur1 = couleur1.map((couleur1) => (
    <ul>
      <li key={couleur1.id}>{couleur1.name}</li>
    </ul>
  ));

  const secteur2 = [
    { id: "1", name: "Etude" },
    { id: "2", name: "Sagesse" },
    { id: "3", name: "Concentration" },
    { id: "4", name: "Développement personnel" },
  ];
  const listSecteur2 = secteur2.map((secteur2) => (
    <ul>
      <li key={secteur2.id}>{secteur2.name}</li>
    </ul>
  ));

  const couleur2 = [
    { id: "1", name: "Bleu" },
    { id: "2", name: "Noir" },
    { id: "3", name: "Marron" },
    { id: "4", name: "Beige" },
    { id: "5", name: "Taupe" },
    { id: "6", name: "vert" },
  ];
  const listCouleur2 = couleur2.map((couleur2) => (
    <ul>
      <li key={couleur2.id}>{couleur2.name}</li>
    </ul>
  ));

  return (
    <>
      <section className="intro-livret">
        <div className="box-livret">
          <img className="img-intro-livret" src={Photos.imgBases} alt="salon" />
          <h1 className="titre-livret-harmoniser">
            Harmoniser votre habitat <br /> avec votre livret Feng shui
            personnalisé
          </h1>
        </div>
        <div className="para-livret">
          <p>
            Je vous propose de faire un état des lieux de votre vie en évaluant
            sur une échelle de 1 à 10,
            <p>
              les 9 zones du Ba Gua.Vous pourrez ainsi identifier, le ou les
              domaines de votre vie qui auront
            </p>
          </p>
          <p>
            besoin d'un soin particulieret vous aurez une vision plus claire de
            là où vous en êtes
          </p>
          <button className="analyse-btn">Analyse de votre situation</button>
        </div>

        <div className="livret-personnalise">
          <h2 className="titre-livret-perso">
            Votre livret Feng Shui personnalisé
          </h2>
          <div className="contenair-livret-perso">
            <div className="box-livret-perso">
              <img src={Photos.galet2} alt="galets" />
              <h2 className="titre-galets-gauche">
                Le Bien-être <br />
                par le <br />
                Feng shui
              </h2>
              <h3 className="titre-perso-milieu">
                Livet personnalisé
                <p className="para-analyse-appart">
                  Analyse de l'appartement de ...
                </p>
              </h3>
            </div>
          </div>
          <div className="bcg-exterieur">
            <div className="bcg-livret">
              <div className="para-livret2">
                <Paragraphe
                  description="Vous trouverez dans ce livret Feng Shui personnalisé tout ce dont vous avez besoin
                de savoir pour harmoniser votre intérieur."
                />
                <Paragraphe
                  description="Mon analyse est uniquement basé sur votre plan. Elle vous permettra de comprendre
                les bases du Feng Shui qui vont vous permettre de mettre facilement en pratique les conseils donnés pour 
                harmoniser votre habitat. "
                />
                <Paragraphe
                  description="Vous y trouverez des conseils simples et pratiques de décorations, couleurs,
                formes, objets qui vous aideront à activer les différents domaines de votre vie: 
                Carrière, Connaissance de Soi et Education, Famille et Santé Financière, 
                Prospérité, Réputation, Couple et Relations, Enfants et Créativité, Voyages et Bienfaiteurs. "
                />
              </div>

              <div className="plan-livret">
                <div className="plan-gauche">
                  <h2 className="titre-plan-gauche">
                    Le Bien-être <br />
                    par le <br />
                    Feng shui
                  </h2>
                  <div className="intro-gauche">
                    <h3 className="titre-introduction">Introduction</h3>
                    <h3 className="titre-bfs">Les bases du Feng Shui</h3>
                    {listPlan}
                  </div>
                  <div className="etudes-pieces">
                    <h3 className="titre-piece">Etude pièce par pièce</h3>
                    <div className="pieces">{listPiece}</div>
                  </div>
                </div>

                <div className="plan-droit">
                  <h2 className="titre-plan-droit">Le plan</h2>
                  <div className="para-droit">
                    <Paragraphe description="Isabelle," />
                    <Paragraphe
                      description="Commet tu peux le voir, ton plan a été découpé
                   en 9 zones qui correspondent chacune à des domaines de vie"
                    />
                    <Paragraphe
                      description="je te propose dans un premier temps de désencombrer
                   et de ranger ton appartement cela permettra au Chi de circuler 
                   librement et d'apporter des énergies positives dans chaque pièce."
                    />
                    <Paragraphe
                      description="Puis tu feras un état des lieux pièce par pièce
                 pour rechercher et corriger des déséquilibres: les objets cassés
                  et inutiles, les plantes mortes, les couleurs qui ne correspondent
                  pas à l'élément du secteur comme vu dans l'onglet 'Les 5 éléments',
                  par exemple: pour le Feu, éviter l'Eau, le Bois éviter le Métal,
                  pour l'Eau éviter la Terre, pour la Terre éviter le Bois, et pour le Métal éviter le Feu"
                    />
                  </div>
                  <div className="box-plan">
                    <img
                      className="img-box-plan"
                      src={Photos.imgPlan}
                      alt="plan"
                    />
                    <p>
                      Feng Shui personnalisé et analyse de l'appartement de ...
                    </p>
                  </div>
                </div>
              </div>         

              <div className="plan-livret2">
                <div className="plan-gauche2">
                  <h2 className="titre-plan-gauche2">
                    Le Bien-être <br />
                    par le <br />
                    Feng shui
                  </h2>
                  <div className="intro-gauche2">
                    <h3 className="titre-introduction2">Introduction</h3>
                    <h3 className="titre-bfs2">Les bases du Feng Shui</h3>
                    {listPlan}
                  </div>
                  <div className="etudes-pieces2">
                    <h3 className="titre-piece2">Etude pièce par pièce</h3>
                    <div className="pieces2">{listPiece}</div>
                  </div>
                </div>

                <div className="plan-droit2">
                  <h2 className="titre-plan-droit2">L'entrée</h2>
                  <div className="para-droit2">
                    <Paragraphe
                      description="La porte d'entrée, surnommée 'la bouche du Chi, accueille l'énergie'
                      positive qui va circuler dans ton habitat. "
                    />
                    <Paragraphe
                      description="Le désordre et l'encombrement empêchent le Chi de circuler et bloquent le flux d'énergie. 
                      il faut donc que l'entrée soit dégagée. Il ne faut pas l'encombrer de chaussures, de manteaux par exemple.
                      Places-les à l'intérieur d'un espace de rangement fermé afin que le Chi ne stagne pas."
                    />
                    <Paragraphe
                      description="L'entrée représente les opportunités. Pour l'activer, places un beau miroir (mais pas en face de la porte)
                      et des fleurs fraîches. Tu peux aussi placer une plante verte et odorante à l'entrée et à l'intérieur de ton appartement
                      pour une meilleure énergie."
                    />
                    <Paragraphe
                      description=" La porte d'entrée doit être en parfaite état. La poignée, les vis, les paumelles, la serrure et
                      l'isolation de cette porte ne doivent avoir aucun défaut."
                    />
                  </div>
                </div>

                <div className="zone-carriere">
                  <div className="couleurs-carrieres">
                    <h3 className="titre-zone-carriere">Zone Carrière</h3>
                    <div className="coul-car">
                      <span className="black">
                        <BiSolidCircle />
                      </span>
                      <span className="blue1">
                        <BiSolidCircle />
                      </span>
                      <span className="blue2">
                        <BiSolidCircle />
                      </span>
                      <span className="blue3">
                        <BiSolidCircle />
                      </span>
                      <span className="blue4">
                        <BiSolidCircle />
                      </span>
                      <span className="blue5">
                        <BiSolidCircle />
                      </span>
                      <span className="black">
                        <BiSolidCircle />
                      </span>
                      <span className="blue1">
                        <BiSolidCircle />
                      </span>
                      <span className="blue2">
                        <BiSolidCircle />
                      </span>
                      <span className="blue3">
                        <BiSolidCircle />
                      </span>
                      <span className="blue4">
                        <BiSolidCircle />
                      </span>
                      <span className="blue5">
                        <BiSolidCircle />
                      </span>
                    </div>
                  </div>
                  <div className="box-secteur-et-couleurs">
                    <div className="secteur-carriere">
                      <h4 className="titre-secteur1">Secteur</h4>
                      {listSecteur1}
                    </div>
                    <div className="couleurs1">
                      <h4 className="titre-couleur1">Couleurs</h4>
                      {listCouleur1}
                    </div>
                  </div>
                  <div className="cadre-elem">
                    <p className="titre-cadre-elm-eau">
                      Elément <TbPointFilled /> eau
                    </p>
                    <p className="titre-cadre-elm-terre">
                      Eviter <TbPointFilled />
                      Terre
                    </p>
                  </div>
                  <div className="objets-conseilles1">
                    <h3 className="titre-objets-conseilles">
                      Objets conseillés
                    </h3>
                    <p>
                      Le bleu et le noir, l'eau, la neige, les coquillages, un
                      aquarium une fontaine, une image de cascade, un miroir,
                      les formes ondulantes et rondes tout symbole représentant
                      vos ambitions professionnelles
                    </p>
                  </div>
                </div>

                <div className="zone-etude-connaissance">
                  <h3 className="titre-zone-etude-connaissance">
                    Zone Etude et connaissance de soi
                  </h3>
                  <div className="coul-etude-connaissance">
                    <span className="black">
                      <BiSolidCircle />
                    </span>
                    <span className="blue1">
                      <BiSolidCircle />
                    </span>
                    <span className="blue2">
                      <BiSolidCircle />
                    </span>
                    <span className="blue3">
                      <BiSolidCircle />
                    </span>
                    <span className="blue4">
                      <BiSolidCircle />
                    </span>
                    <span className="blue5">
                      <BiSolidCircle />
                    </span>
                    <span className="black">
                      <BiSolidCircle />
                    </span>
                    <span className="blue1">
                      <BiSolidCircle />
                    </span>
                    <span className="blue2">
                      <BiSolidCircle />
                    </span>
                    <span className="blue3">
                      <BiSolidCircle />
                    </span>
                    <span className="blue4">
                      <BiSolidCircle />
                    </span>
                    <span className="blue5">
                      <BiSolidCircle />
                    </span>
                  </div>

                  <div className="box-secteur-et-couleurs2">
                    <div className="box-secteur-etude-connaissance">
                      <h4>Secteur</h4>
                      {listSecteur2}
                    </div>
                    <div className="couleurs2">
                      <h4>Couleurs</h4>
                      {listCouleur2}
                    </div>
                  </div>
                  <div className="objets-conseilles2">
                    <h3 className="titre-objets-conseilles">
                      objets conseillés
                    </h3>
                    <p>
                      Le bleu, le noir et le vert, les livres, tout ce qui
                      représente la sagesse, un guide, un bouddha, un mentor, un
                      autel, des poteries ou des sculptures en pierre ou en
                      argile
                    </p>
                  </div>
                </div>
              </div>

              <p>Feng Shui personnalisé et analyse de l'appartement de ...</p>
            </div>
          </div>
        </div>     

        <div className="offres">
         
          <div className="contenair-offre1">
            <div className="box-img-lanterne">
              <img 
                className="img-offre1"
                src={Photos.lanterne}
                alt="lanterne chinoise"
              />
              <h3 className="titre1">
                Le Bien-être <br />
                par le <br />
                Feng Shui
              </h3>
              <h3 className="titre2">Livret personnalisé</h3>
              <h5 className="titre3">Analyse de l'appartement de...</h5>
            </div>

            <div className="contenu-droite">
              <h3 className="titre4">Votre livret personnalisé</h3>
              <h3 className="price-offre1">prix:50 euros</h3>
              <button className="btn-offre1">En savoir plus</button>
            </div>
          </div>
        </div>

        <BandeauBases />
      </section>
    </>
  );
}

export default Livret;
