import './App.css';
import PokemonGallery from './compes/PokemonGallery';
import PokemonModal from './compes/PokemonModal';
import img01 from './img/001.png'
import img02 from './img/002.png'
import img03 from './img/003.png'
import img04 from './img/004.png'
import img05 from './img/005.png'
import img06 from './img/006.png'
import img07 from './img/007.png'
import img08 from './img/008.png'
import img09 from './img/009.png'
import img10 from './img/010.png'
import img11 from './img/011.png'
import img12 from './img/012.png'
import React, { useState } from 'react';


function App() {

  const infoPokemon = [
    {
      id:1,
      name:'Bulbasaur',
      number:'#0001',
      img: img01,
      inb1:'Grass',
      inb2:'Poison',

    },
    {
      id:2,
      name:'Ivysaur',
      number:'#0002',
      img: img02,
      inb1:'Grass',
      inb2:'Poison',

    },
    {
      id:3,
      name:'Venusaur',
      number:'#0003',
      img: img03,
      inb1:'Grass',
      inb2:'Poison',

    },
    {
      id:4,
      name:'Charmander',
      number:'#0004',
      img: img04,
      inb1:'Fire',
      inb2:''
    },
    {
      id:5,
      name:'Charmeleon',
      number:'#005',
      img: img05,
      inb1:'Fire',
      inb2:'',
    },
    {
      id:6,
      name:'Charizard',
      number:'#0006',
      img: img06,
      inb1:'Fire',
      inb2:'Flying',
    },
    {
      id:7,
      name:'Squirtle',
      number:'#0007',
      img: img07,
      inb1:'Water',
      inb2:'',
    },
    {
      id:8,
      name:'Wartortle',
      number:'#0008',
      img: img08,
      inb1:'Water',
      inb2:'',
    },
    {
      id:9,
      name:'Blastoise',
      number:'#0009',
      img: img09,
      inb1:'Water',
      inb2:'',
    },
    {
      id:10,
      name:'Caterpie',
      number:'#0010',
      img: img10,
      inb1:'Bug',
      inb2:'',
    },
    {
      id:11,
      name:'Metapod',
      number:'#0011',
      img: img11,
      inb1:'Bug',
      inb2:'',
    },
    {
      id:12,
      name:'Butterfree',
      number:'#0012',
      img: img12,
      inb1:'Bug',
      inb2:'Flying',
    },
  ]
    const [pokemons, setPokemons] = useState(infoPokemon);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
      
    };

    const handleSavePokemon = (changePokemon) => {
      setPokemons((prevPokemons) =>
          prevPokemons.map((pokemon) =>
              pokemon.id === changePokemon.id ? changePokemon : pokemon
          )
      );
   
      setIsModalOpen(false);
  };
 

  return (
    <>
       <div className='container'>
          {pokemons.map((pokemon)=>(
            <PokemonGallery key={pokemon.id} pokemon={pokemon} onImageClick={handleImageClick}/>
          ))}
          <PokemonModal
                pokemon={selectedPokemon}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSavePokemon}        
          />
      </div>
      <div style={{width:'200px', height:'500px', backgroundColor:'black', margin:'auto' }}>

      </div>
    </>
      
 
     

  );
}

export default App;
