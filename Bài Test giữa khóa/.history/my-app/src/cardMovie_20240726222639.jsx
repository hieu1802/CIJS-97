import React from 'react'

function cardMovie({dataMovies, onCardClick}) {
  return (
    <div className='cardMovie'>
           {dataMovies.map((datamovie,index)=>(
            <>
                <img src={datamovie.image}/>
            </>
           ))}
     
    </div>
    
  )
}

export default cardMovie