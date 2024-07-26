import React from 'react'

function PokemonGallery({infoPokemon,onImageClick }) {
  return (
    <div className='container'>
        {infoPokemon.map(item =>(
          <div className='boxCard' onClick={handleImageClick}>
      
           
            <div className='imgCard'>
              <img src={item.img}/>
            </div>
            <p>{item.number}</p>
            <h3>{item.name}</h3>
            <div className='atbCard'>
              <div className='atb color01'>{item.inb1}</div>
              <div className='atb color04'>{item.inb2}</div>
            </div>
      </div>

 
          ))}
      </div>
  )
}

export default PokemonGallery