import React from 'react'

function PokemonGallery({pokemon,onImageClick }) {
  return (
   
        
          <div className='boxCard' onClick={()=> onImageClick(pokemon)} >
      
           
            <div className='imgCard'>
              <img src={pokemon.img}/>
            </div>
            
      </div>

 
         
    
  )
}

export default PokemonGallery