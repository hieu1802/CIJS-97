import React from 'react'

function CardModal ({movie, isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div className='cardModal' >
            <span className="close" onClick={onClose}>&times;</span>
            <div className='avaModal'>
                <img src={movie.image} style={{width:'100%', height:'100%'}}/>
            </div>
        </div>
  )
}

export default CardModal 