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


  const handleButtonClick = (name) => {
    alert(`${name} xin chào!`);
  };

 

  return (
    <>
      <div className='container'>
        <div className='boxCard' onClick={() => handleButtonClick('Bulbasaur')}>
          <div className='imgCard'>
            <img src={img01}/>
          </div>
          <p>#0001</p>
          <h3>Bulbasaur</h3>
          <div className='atbCard'>
              <div className='atb color01'>Grass</div>
              <div className='atb color02'>Poison</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Ivysaur')}>
          <div className='imgCard'>
            <img src={img02}/>
          </div>
          <p>#0002</p>
          <h3>Ivysaur</h3>
          <div className='atbCard'>
              <div className='atb color01'>Grass</div>
              <div className='atb color02'>Poison</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Venusaur')}>
          <div className='imgCard'>
            <img src={img03}/>
          </div>
          <p>#0003</p>
          <h3>Venusaur</h3>
          <div className='atbCard'>
              <div className='atb color01'>Grass</div>
              <div className='atb color02'>Poison</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Charmander')}>
          <div className='imgCard'>
            <img src={img04}/>
          </div>
          <p>#0004</p>
          <h3>Charmander</h3>
          <div className='atbCard'>
              <div className='atb color03'>Fire</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Charmeleon')}>
          <div className='imgCard'>
            <img src={img05}/>
          </div>
          <p>#0005</p>
          <h3>Charmeleon</h3>
          <div className='atbCard'>
              <div className='atb color03 '>Fire</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Charizard')}>
          <div className='imgCard'>
            <img src={img06}/>
          </div>
          <p>#0006</p>
          <h3>Charizard</h3>
          <div className='atbCard'>
              <div className='atb color03'>Fire</div>
              <div className='atb color04'>Flying</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Squirtle')}>
          <div className='imgCard'>
            <img src={img07}/>
          </div>
          <p>#0007</p>
          <h3>Squirtle</h3>
          <div className='atbCard'>
              <div className='atb color05'>Water</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Wartortle')}>
          <div className='imgCard'>
            <img src={img08}/>
          </div>
          <p>#0008</p>
          <h3>Wartortle</h3>
          <div className='atbCard'>
              <div className='atb color05'>Water</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Blastoise')}>
          <div className='imgCard'>
            <img src={img09}/>
          </div>
          <p>#0009</p>
          <h3>Blastoise</h3>
          <div className='atbCard'>
              <div className='atb color05'>Water</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Caterpie')}>
          <div className='imgCard'>
            <img src={img10}/>
          </div>
          <p>#0010</p>
          <h3>Caterpie</h3>
          <div className='atbCard'>
              <div className='atb color06'>Bug</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Metapod')}>
          <div className='imgCard'>
            <img src={img11}/>
          </div>
          <p>#0011</p>
          <h3>Metapod</h3>
          <div className='atbCard'>
              <div className='atb color06'>Bug</div>
          </div>
        </div>
        <div className='boxCard' onClick={() => handleButtonClick('Butterfree')}>
          <div className='imgCard'>
            <img src={img12}/>
          </div>
          <p>#0012</p>
          <h3>Butterfree</h3>
          <div className='atbCard'>
              <div className='atb color06'>Bug</div>
              <div className='atb color04'>Flying</div>
          </div>
        </div>
      </div>
    </>
  
  );
}

export default App;
