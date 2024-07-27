import React from "react";
import img01 from '../img/img01.png'

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return (
      <div className="carouset">
        <img src={img01} />
        <div className="titleCarouset">
          <p>Weather With You</p>
        </div>
        <div className="leadCarouset">
          <p>
            {" "}
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.{" "}
          </p>
        </div>
      </div>
    );
  }

  const { movieName, description, image, episode } = movie;

  return (
    <div className="carouset">
      {image ? <img src={image} alt={movieName} /> : <p>No image available</p>}
      <div className="titleCarouset">
        <p>{movieName}</p>
      </div>
      <div className="leadCarouset">
        <p> {description} </p>
      </div>
    </div>
  );
};

export default MovieDetail;
