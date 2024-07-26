import React from 'react'
import '../index.css'

function PokemonModal({item, isOpen, onClose}) {
    if(!isOpen) return null
  return (
    <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{item}</h2>
                <p>Type: {item}</p>
                <p>Ability: {item}</p>
            </div>
    </div>
  )
}

export default PokemonModal