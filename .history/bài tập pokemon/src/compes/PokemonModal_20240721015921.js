import React, {useState} from 'react'
import '../index.css'

function PokemonModal({pokemon, isOpen, onClose, onSave}) {
  const [changePokemon, setChangePokemon] = useState({ ...pokemon });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangePokemon((prev) => ({ ...prev, [name]: value }));
};


  if(!isOpen) return null
  return (
   
    <div className="modal">
       
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={pokemon.img}/>
                <h1>Thay Đổi Thông Tin Pokemon</h1>
                <div className='changeName'>
                  <h2>Tên: {pokemon.name}</h2>
                  <input/>
                </div>
                <p className='color03'>Number: {pokemon.number}</p>
                <p className='color02'>Ability: {pokemon.inb1}</p>
                <p className='color02'>Ability: {pokemon.inb2}</p>
                <button className='btn'>Thay Đổi</button>
            </div>
    </div>
  )
}

export default PokemonModal