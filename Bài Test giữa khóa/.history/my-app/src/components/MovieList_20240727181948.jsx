import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMovieSelect }) => {

  return (
    <div className='lastestRelease'>
     <div className='textLastestRelease'>
          <p>New Release</p>
        </div>
        <div className='boxMovie'>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
      ))}
        </div>
    </div>
  );
};

export default MovieList;