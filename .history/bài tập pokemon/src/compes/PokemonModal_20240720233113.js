import React from 'react'
import '../index.css'

function PokemonModal({item, isOpen, onClose}) {
    if(!isOpen) return null
  return (
    <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{item.name}</h2>
                <p>Type: {item.name}</p>
                <p>Ability: {item.inb1}</p>
            </div>
    </div>
  )
}

export default PokemonModal