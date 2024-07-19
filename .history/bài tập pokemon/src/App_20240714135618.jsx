import './App.css';
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

function App() {

  const infoPokemon = [
    {
      id:1,
      name:'Bulbasaur',
      number:'0001',
      img: img01,
      inb1:'Grass',
      inb2:'Poison',
      inb3:''
    },
  ]

  const handleButtonClick = (name) => {
    alert(`${name} xin chào!`);
  };

 

  return (
    infoPokemon.map(item =>(
      <>
        <div className='container'>
          <div className='boxCard' onClick={() => handleButtonClick(item.name)} key={item.id}>
            <div className='imgCard'>
              <img src={item.img}/>
            </div>
            <p>{item.number}</p>
            <h3>{item.name}</h3>
            <div className='atbCard'>
              <div className='atb color01'>{item.inb1}</div>
              <div className='atb color02'>{item.inb2}</div>
            </div>
          </div>
        </div>
      </>
    ))  
  );
}

export default App;
