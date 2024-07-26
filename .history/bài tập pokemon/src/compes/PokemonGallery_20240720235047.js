import React from 'react'

function PokemonGallery({infoPokemon,onImageClick }) {
  return (
    <div className='container'>
        {infoPokemon.map(pokemon =>(
          <div className='boxCard'  onClick={() => onImageClick()}>
      
           
            <div className='imgCard'>
              <img src={pokemon.img}/>
            </div>
            <p>{pokemon.number}</p>
            <h3>{pokemon.name}</h3>
            <div className='atbCard'>
              <div className='atb color01'>{pokemon.inb1}</div>
              <div className='atb color04'>{pokemon.inb2}</div>
            </div>
      </div>

 
          ))}
      </div>
  )
}

export default PokemonGallery