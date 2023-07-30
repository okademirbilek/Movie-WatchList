import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieCart from "../components/MovieCart";

import useFetch from "../hooks/useFetch";

import { Context } from "../Context";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

export default function MovieDetails() {
  const params = useParams();

  const { addToWatchList } = useContext(Context);

  const { loading, error, value } = useFetch(
    `https://omdbapi.com/?apikey=${apiKey}&i=${params.id}&plot=short`,
    {},
    [params.id]
  );

  if (loading) {
    return <h1 className="error-msg">Loading...</h1>;
  }

  if (value) {
    if (value.Response === "False") {
      return <h1 className="error-msg">Error: {value.Error}</h1>;
    }
  }

  if (error) {
    return (
      <div className="error-msg">
        Error occured:Unable to find what you’re looking for
        {JSON.stringify(error, null, 2)}
      </div>
    );
  }

  return (
    <div className="movie-detail-container">
      <>
        <MovieCart
          filmData={value}
          onClick={addToWatchList}
          btnId="add-btn"
          detailPage={false}
        />
      </>
    </div>
  );
}
