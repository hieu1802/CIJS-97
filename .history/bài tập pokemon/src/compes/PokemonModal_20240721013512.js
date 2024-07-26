import React from 'react'
import '../index.css'

function PokemonModal({pokemon, isOpen, onClose}) {
    if(!isOpen) return null
  return (
   
    <div className="modal">
       
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={pokemon.img}/>
                <h2>{pokemon.name}</h2>
                <p className='color03'>Number: {pokemon.number}</p>
                <span className='color02'><p>Ability: {pokemon.inb1}</p></span>
                <button className='btn'>Thay Đổi</button>
            </div>
    </div>
  )
}

export default PokemonModal