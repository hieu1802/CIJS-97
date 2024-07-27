import React from 'react'

function Movieetail({movie}) {
  return (
    <div className='carouset'>
       <>
     
       </>
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