import React from 'react'

function Movieetail({movie}) {
  return (
    <div className='carouset'>
        <img src={movie.image}/>
        <div className='titleCarouset'>
          <p>{movie.movieName}</p>  
        </div>
        <div className='leadCarouset'>
          <p> {movie.description} </p>
        </div>
      </div>
  )
}

export default Movieetail