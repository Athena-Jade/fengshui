import React from 'react'

function DetailsElements() {
  return (
    <>
       <section className="explications-bases-fs">
        <h2>Les 5 éléments</h2>
        <div className="box-explication-bases">
          <div className="box-explication1">
            <Paragraphe
              description="Les cinq éléments qui sont l’Eau,
              le Bois, le Feu, la Terre et le Métal trouvent 
              leur pleine efficacité dans l’agencement, 
              l’aménagement et la décoration des différentes 
              pièces de la maison. "
            />
            <br />
            <Paragraphe
              description=" En cas de déséquilibre 
              énergétique localisé, ils servent à rétablir 
              ou à dynamiser le cycle créatif."
            />
            <br />
            <Paragraphe
              description="Par exemple, 
              renforcer l’élément bois dans la zone qui lui 
              correspond va fortifier la zone richesse et 
              stimuler la zone réputation. Inversement, 
              en cas d’excès, il suffit souvent de réactiver 
              (en douceur) le cycle d’affaiblissement."
            />
          </div>
          <div className="picto">
            <div className="img-picto">
              <img src="./public/img/picto.png" alt="" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default DetailsElements
