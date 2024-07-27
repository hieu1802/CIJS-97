import React from "react";

const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div
      className="cardMovie"
      key={movie.id}
      onClick={() => onMovieSelect(movie)}
    >
      <img src={movie.image} />
      <p>episode {movie.episode}</p>
      <h3>{movie.movieName}</h3>
    </div>
  );
};

export default MovieItem;
