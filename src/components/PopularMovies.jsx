import React from "react";
import { Link } from "react-router-dom";

function PopularMovies(props) {
  return (
    <div className="container">
      <Link to={`/details${props.movie.id}`}>
        <img className="movie-image" src={props.movie.img}></img>
      </Link>
      <div className="popular-film-info">
        <div className="popular-film-directed ellipsis">
          <p>{props.movie.title}</p>
        </div>

        <p>Year: {props.movie.year}</p>
        <div className="popular-film-directed ellipsis">
          <p>{props.movie.directedBy}</p>
        </div>
      </div>
    </div>
  );
}

export default PopularMovies;
