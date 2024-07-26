import React from 'react'
import '../index.css'

function PokemonModal({pokemon, isOpen, onClose}) {
    if(!isOpen) return null
  return (
    <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{pokemon.name}</h2>
                <p>Type: {pokemon.type}</p>
                <p>Ability: {pokemon.ability}</p>
            </div>
    </div>
  )
}

export default PokemonModal