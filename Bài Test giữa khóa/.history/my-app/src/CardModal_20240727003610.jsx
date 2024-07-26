import React from 'react'

function CardModal ({movie, isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div className='cardModal' >
            <div className="close" onClick={onClose}>&times;</div>
            <h2>{movie.movieName}</h2>
            <img src={movie} alt={movie.movieName} style={{ width: '100%' }} />
            <p>{movie.description}</p>
        </div>
  )
}

export default CardModal 