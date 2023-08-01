import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  const styles = isShown
    ? {
        boxShadow: "0px 0px 30px 0px white",
        opacity: 0.6,
        transform: "scale(1.1)",
      }
    : {};

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img className="carousel-img" style={styles} src={movie.img}></img>
      <h6 className="movie-year">{movie.year}</h6>
      <h6 className="movie-icon">⭐</h6>
      <h6 className="movie-star">9.7</h6>
      {isShown && (
        <Link to={`/details/${movie.id}`}>
          <img
            className="play-btn"
            src="https://www.freepnglogos.com/uploads/play-button-png/play-button-ifa-1.png"
            width="100"
            alt="play button, ifa"
          />
        </Link>
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
