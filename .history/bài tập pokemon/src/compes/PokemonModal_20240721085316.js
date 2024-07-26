import React, {useState, useEffect} from 'react'
import '../index.css'

function PokemonModal({pokemon, isOpen, onClose, onSave}) {
  const [changePokemon, setChangePokemon] = useState({...pokemon});

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setChangePokemon((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(changePokemon);
    onClose();
  };


  if(!isOpen || !pokemon) return null
  return (
   
    <div className="modal">
       
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={pokemon.img}/>
                <h1>Thay Đổi Thông Tin Pokemon</h1>
              
                <div className='changeName'>
                  <p className='color05'>Tên: {pokemon.name}</p>
                  <label>
                    <input
                      type='text'
                      name='name'
                      value={changePokemon.name}
                      onChange={handleChange}
                    />
                  </label>
                 
                </div>
                <div className='changeName'>
                  <p className='color03'>Number: {pokemon.number}</p>
                  <input
                    type='text'
                    name='number'
                    value={changePokemon.number}
                    onChange={handleChange}
                  />
                </div>
                <div className='changeName'>
                <p className='color02'>Ability: {pokemon.inb1}</p>
                  <input
                    type='text'
                    name='inb1'
                    value={changePokemon.inb1}
                    onChange={handleChange}
                  />
                </div>
                <div className='changeName'>
                <p className='color02'>Ability: {pokemon.inb2}</p>
                  <input
                    type='text'
                    name='inb2'
                    value={changePokemon.inb2}
                    onChange={handleChange}
                  />
                </div>
              
                <button className='btn' onClick={handleSave}>Thay Đổi</button>
            </div>
    </div>
  )
}

export default PokemonModal