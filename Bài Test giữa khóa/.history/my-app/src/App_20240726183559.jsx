import img01 from './img/img01.png'
import './App.css';

function App() {
  return (
   <>
    <div className='container'>
      <div className='navbar'>
        <div className='navbarLogo'><h1>Anonime</h1></div>
        <div className='navbarPage'><p>Home</p></div>
        <div className='navbarPage' style={{width:'112px'}}> <p>List Anime</p></div>
        <input className='navbarInput' placeholder='Search anime or movie'/>
      </div>
      <div className='textH3'>
        <h3>Explore</h3>
      </div>
      <div className='textH2'>
        <h2>What are you gonna watch today ?</h2>
      </div>
      <div className='carouset'>
        <img src={img01}/>
      </div>
    </div>
   </> 
  )
}

export default App;
