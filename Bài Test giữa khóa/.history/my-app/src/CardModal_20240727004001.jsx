import React from 'react'

function CardModal ({movie, isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div className='cardModal' >
            <span className="close" onClick={onClose}>&times;</span>
            <div className='avaModal'>
                <h3>{movie.movieName}</h3>
            </div>
        </div>
  )
}

export default CardModal 