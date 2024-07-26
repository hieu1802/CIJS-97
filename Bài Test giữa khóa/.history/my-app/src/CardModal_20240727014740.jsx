import React from 'react'

function CardModal ({movie, isOpen, onClose}) {
  if (!isOpen) return null;
  return (
    <div className='cardModal' >
            <span className="close" onClick={onClose}>&times;</span>
            <div className='titleModal'>
              <div className='content'>
                <h3>{movie.movieName}</h3>
                <h4>Thể Loại: Anime</h4>
                <h4>episode: {movie.episode}</h4>
                <div className='btn'>Xem Phim </div>
              </div>
               <div className='avaModel'>
                 <img src={movie.image}/>
               </div>
            </div>
        </div>
  )
}

export default CardModal 