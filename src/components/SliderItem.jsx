import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const SliderItem = ({ movie, justAlert }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img className="carousel-img" src={movie.img}></img>
      <h6 className="movie-year">{movie.year}</h6>
      <h6 className="movie-icon">⭐</h6>
      <h6 className="movie-star">9.7</h6>
      {isShown && (
        <img
          className="play-btn"
          src="https://www.freepnglogos.com/uploads/play-button-png/play-button-ifa-1.png"
          width="100"
          alt="play button, ifa"
          onClick={() => justAlert({ filmName: movie.title })}
        />
      )}
    </div>
  );
};

SliderItem.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default SliderItem;
