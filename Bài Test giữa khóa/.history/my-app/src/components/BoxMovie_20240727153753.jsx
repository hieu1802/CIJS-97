import React from 'react'

function BoxMovie({dataMovies,onMovieSelect}) {
  return (
    <div className='boxMovie'>
          {dataMovies.map((data)=>(
            <div className='cardMovie' key={data.id} >
              <img src={data.image} />
              <p>episode {data.episode}</p>
              <h3>{data.movieName}</h3>
            </div>
          ))}
        </div>
  )
}

export default BoxMovie