
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

    </div>
   </> 
  )
}

export default App;
