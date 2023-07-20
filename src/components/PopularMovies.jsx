import React from "react";
import { Link } from "react-router-dom";

function PopularMovies(props) {
  return (
    <div className="container">
      <Link to={`/${props.movie.id}`}>
        <img className="movie-image" src={props.movie.img}></img>
      </Link>
      <div className="popular-film-info">
        <p>{props.movie.title}</p>
        <p>Year: {props.movie.year}</p>
        <p>{props.movie.directedBy}</p>
      </div>
    </div>
  );
}

export default PopularMovies;
