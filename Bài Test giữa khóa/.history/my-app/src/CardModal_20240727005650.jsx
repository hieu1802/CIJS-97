import React from 'react'

function CardModal ({movie, isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div className='cardModal' >
            <div className='titleModal'>
               <span className="close" onClick={onClose}>&times;</span>
               <div className='avaModel'>
                 <img src={movie.image}/>
               </div>
            </div>
        </div>
  )
}

export default CardModal 