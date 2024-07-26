import React from 'react'

function PokemonGallery({infoPokemon,onImageClick }) {
  return (
    <div className='container'>
        
          <div className='boxCard' onClick={()=> onImageClick(infoPokemon)} >
      
           
            <div className='imgCard'>
              <img src={infoPokemon.img}/>
            </div>
            <p>{infoPokemon.number}</p>
            <h3>{infoPokemon.name}</h3>
            <div className='atbCard'>
              <div className='atb color01'>{infoPokemon.inb1}</div>
              <div className='atb color04'>{infoPokemon.inb2}</div>
            </div>
      </div>

 
         
      </div>
  )
}

export default PokemonGallery