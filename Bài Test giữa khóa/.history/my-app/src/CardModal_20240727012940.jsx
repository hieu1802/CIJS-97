import React from 'react'

function CardModal ({movie, isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div className='cardModal' >
            <span className="close" onClick={onClose}>&times;</span>
            <div className='titleModal'>
              <div className='content'>
                <h3>{movie.movieName}</h3>
              </div>
               <div className='avaModel'>
                 <img src={movie.image}/>
               </div>
            </div>
        </div>
  )
}

export default CardModal 