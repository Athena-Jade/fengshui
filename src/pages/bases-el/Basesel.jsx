import React from "react";
import BandeauBases from "../../composants/bandeau-bases/BandeauBases";
import "./BasesEl.css";
import Paragraphe from "../../composants/paragraphes/Paragraphe";
import Photos from "../../photos/Photos";
function Basesel() {
  return (
    <>
      <section className="intro-cinq-elements">
        <div className="box-cinq-elements">
          <img className="img-elements" src={Photos.cinqElem} alt="5 éléments" />
        </div>

        <div className="contenair-elements">
          <div className="picto-elements">
            <img
              src={Photos.picto}
              alt="picto 5 éléments"
              className="img-picto-elements"
            />
          </div>
          <h2 className="titre-elements1">Les 5 éléments</h2>
        </div>

        <div className="infos-elements">
          <div className="para-elements1">
            <Paragraphe
              description="Les cinq éléments qui sont l’Eau, le Bois, le Feu, la Terre
              et le Métal trouvent leur pleine efficacité dans l’agencement, l’aménagement et la 
              décoration des différentes pièces de la maison.En cas de déséquilibre énergétique localisé, ils servent à 
              rétablir ou à dynamiser le cycle créatif."
            />
          </div>
          <div className="para-elements2">
            <Paragraphe
              description="Par exemple, renforcer l’élément bois dans la zone qui lui
              correspond va fortifier la zone richesse et stimuler la zone réputation. Inversement,
              en cas d’excès, il suffit souvent de réactiver (en douceur) le cycle d’affaiblissement."
            />
          </div>
        </div>

        <div className="les-trois-cycles">
          <div className="cycle-production">
            <div className="box-production">
              <div className="schema-production">
                <img
                  className="img-schema-prod"
                  src={Photos.elem5}
                  alt="5 éléments"
                />
              </div>
              <div className="texte-production">
                <h3 className="titre-production">Le cycle de production</h3>
                <Paragraphe
                  description="Le bois se nourrit de la terre,
                  la terre absorbe l’eau,
                  l’eau éteint le feu,
                  le feu fait fondre le métal,
                  le métal coupe le bois."
                />
              </div>
            </div>
          </div>

          <div className="cycle-destruction">
            <div className="box-destruction">
              <div className="schema-destruction">
                <img
                  className="img-schema-dest"
                  src={Photos.destruction}
                  alt="5 éléments"
                />
              </div>
              <div className="texte-destruction">
                <h3 className="titre-destruction">Le cycle de destruction</h3>
                <Paragraphe
                  description="Le bois génère le feu,
                  le feu génère la terre,
                  la terre génère le métal,
                  le métal génère l’eau,
                  l’eau génère le bois."
                />
              </div>
            </div>
          </div>

          <div className="cycle-affaiblissement">
            <div className="box-affaiblissement">
              <div className="schema-affaiblissement">
                <img
                  className="img-schema-affaiblis"
                  src={Photos.affaiblis}
                  alt="5 éléments"
                />
              </div>
              <div className="texte-affaiblissement">
                <h3 className="titre-affaiblissement">
                  Le cycle d'affaiblissement
                </h3>
                <Paragraphe
                  description="L’eau affaiblit le métal,
                  le métal affaiblit la terre,
                  la terre affaiblit le feu,
                  le feu affaiblit le bois,
                  le bois affaiblit l’eau."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="contenair-eau">
          <div className="box-picto-eau">
            <img
              className="picto-eau"
              src={Photos.pictoEau}
              alt="picto eau"
            />
            <h2 className="titre-eau">L'Eau</h2>
          </div>
          <div className="element-eau">
            <div className="para-eau">
              <Paragraphe description=" C’est l’élément du calme par excellence qui conduit à la spiritualité, à l’évasion, à la concentration et à la réflexion. Il est l’antidote au stress." />
              <Paragraphe description="Il est l’antidote au stress. En excès, il peut engendrer la fermeture, le repli et la tristesse. L’eau est en relation avec les reins, l’hiver, la nuit, le noir et le bleu foncé." />
              <Paragraphe description="Les formes de l’eau sont ondulantes. Les éléments comme les fontaines, le verre et les aquariums activent l’élément eau." />
            </div>
            <div className="box-eau">
              <img
                className="imag-eau"
                src={Photos.elemEau}
                alt="elements eau"
              />
            </div>
          </div>
        </div>

        <div className="contenair-bois">
          <div className="box-picto-bois">
            <img
              className="picto-bois"
              src={Photos.pictoBois}
              alt="picto bois"
            />
            <h2 className="titre-bois">Le Bois</h2>
          </div>
          <div className="element-bois">
            <div className="para-bois">
              <Paragraphe
                description="Il représente le printemps, l’envol, la naissance et la renaissance.
               Il stimule les idées nouvelles, la créativité, les projets et leur mise en œuvre."
              />
              <Paragraphe
                description="En excès, il devient à l’inverse dispersion et instabilité.
               L’élément bois est lié au foie, au printemps et à la couleur verte."
              />
              <Paragraphe
                description="Il symbolise la santé et la richesse. Sa forme 
                géométrique qui lui correspond est un rectangle placé debout.Les éléments
                comme les plantes et les objets en bois activent l’élément bois."
              />
            </div>
            <div className="box-bois">
              <img
                className="imag-bois"
                src={Photos.elemBois}
                alt="bois"
              />
            </div>
          </div>
        </div>

        <div className="contenair-feu">
          <div className="box-picto-feu">
            <img
              className="picto-feu"
              src={Photos.pictoFeu}
              alt="picto feu"
            />
            <h2 className="titre-feu">Le Feu</h2>
          </div>
          <div className="element-feu">
            <div className="para-feu">
              <Paragraphe description="C’est la force mise en action, la réalisation des projets, la passion mise en œuvre qui engendre la réputation. Synonyme d’efficacité, il est le remède contre la dépression, la timidité et les croyances limitantes" />
              <Paragraphe description="En excès, il peut mener à l’excitation et la dispersion dans l’action.Le feu est associé à l’été, au rouge et au cœur." />
              <Paragraphe description="La forme géométrique correspondante est le triangle ou la pyramide.Les éléments comme les bougies, les lampes ou une cheminée activent l’élément feu." />
            </div>
            <div className="box-feu">
              <img
                className="imag-feu"
                src={Photos.elemFeu}
                alt="feu"
              />
            </div>
          </div>
        </div>

        <div className="contenair-terre">
          <div className="box-picto-terre">
            <img
              className="picto-terre"
              src={Photos.pictoTerre}
              alt="picto terre"
            />
            <h2 className="titre-terre">La Terre</h2>
          </div>
          <div className="element-terre">
            <div className="para-terre">
              <Paragraphe description="C’est l’élément du calme par excellence qui conduit à la spiritualité, à l’évasion, à la concentration et à la réflexion. Il est l’antidote au stress." />
              <Paragraphe description="En excès, il peut engendrer la fermeture, le repli et la tristesse." />
              <Paragraphe description="L’eau est en relation avec les reins, l’hiver, la nuit, le noir et le bleu foncé. Les formes de l’eau sont ondulantes." />
              <Paragraphe description="Les éléments comme les fontaines, le verre et les aquariums activent l’élément eau." />
            </div>
            <div className="box-terre">
              <img
                className="imag-terre"
                src={Photos.elemTerre}
                alt="terre"
              />
            </div>
          </div>
        </div>

        <div className="contenair-metal">
          <div className="box-picto-metal">
            <img
              className="picto-metal"
              src={Photos.pictoMetal}
              alt="picto terre"
            />
            <h2 className="titre-metal">Le Métal</h2>
          </div>
          <div className="element-metal">
            <div className="para-metal">
              <Paragraphe description="Il est l’ordre, l’organisation et la rigueur. Le métal correspond aux poumons, à l’automne et à la couleur blanche." />
              <Paragraphe description="En excès, il peut gêner la créativité, les projets et surtout la sociabilité." />
              <Paragraphe description="Ses formes géométriques sont le cercle, la sphère et le dôme." />
              <Paragraphe description="Les éléments comme des objets métalliques de formes arrondies, des cloches, des coupes et des vases activent l’élément métal." />
            </div>
            <div className="box-metal">
              <img
                className="imag-metal"
                src={Photos.elemMetal}
                alt="metal"
              />
            </div>
          </div>
        </div>
        <BandeauBases />
      </section>
    </>
  );
}

export default Basesel;
