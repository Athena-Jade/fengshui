import React from 'react'
import './Paragraphe.css'
//parent
function Paragraphe({description}) {
  return (
    <>
      <div className='paragraphe' style={{padding:"1rem"}}>     
        {description}                 
      </div>      
    </>
  )
}

export default Paragraphe
