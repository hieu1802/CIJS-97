import React from 'react'
import '../index.css'

function PokemonModal({infoPokemon, isOpen, onClose}) {
    if(!isOpen) return null
  return (
   
    <div className="modal">
       
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{infoPokemon.name}</h2>
                <p>Type: {infoPokemon.name}</p>
                <p>Ability: {infoPokemon.inb1}</p>
            </div>
    </div>
  )
}

export default PokemonModal