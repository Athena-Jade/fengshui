import React from 'react'
import './BandeauBases.css'
import { Link } from 'react-router-dom'
import Photos from '../../photos/Photos'
function BandeauBases() {
  return (
    <>
    <section className="bandeau-bases">
        <div className="contenair-bandeau-bases">
            <div className="box-bagua">              
                <Link to='/bagua'>
                      <img className='picto-bagua' src={Photos.pictoBagua} alt="Le bagua" />
                <h4 className='titre-bag'>Le Bagua</h4>
                </Link>
            </div>
            <div className="box-chi">
                <Link to='/chi'>
                    <img  className='picto-chi' src={Photos.pictoChi} alt="Le chi" />
                    <h4 className='titre-chi'>Le Chi</h4>
                </Link>    
            </div>
            <div className="box-5elem">
                <Link to='/basesel'>
                    <img  className='picto-5elem' src={Photos.picto} alt="Les 5 éléments"  />
                    <h4 className='titre-elem'>Les 5 éléments</h4>
                </Link>    
            </div>

            <div className="box-rangement">
                <Link to='/rangement'>
                    <img className='picto-rangement' src={Photos.pictoRangement} alt="Le rangement" />
                    <h4 className='titre-rangement'>Le Rangement</h4>
                </Link>    
            </div>
            <div className="box-remedes">
                <Link to='/remedes'>
                    <img className='picto-remedes' src={Photos.pictoRemedes} alt="Les remèdes" />
                    <h4 className='titre-remedes'>Les remèdes</h4>
                </Link>    
            </div>

        </div>
    </section>
      
    </>
  )
}

export default BandeauBases
