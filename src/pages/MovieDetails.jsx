import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCart from "../components/MovieCart";

import useFetch from "../hooks/useFetch";

import { useAuth } from "../context/AuthContext";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

export default function MovieDetails() {
  const [onToggle, setOnToggle] = useState(false);
  const params = useParams();

  const { addNewMovie } = useAuth();

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

  function hanleClick() {
    setOnToggle((prevToggle) => !prevToggle);
  }

  return (
    <div className="movie-detail-container">
      <>
        <MovieCart
          filmData={value}
          onClick={addNewMovie}
          btnId="add-btn"
          detailPage={false}
        />
        <div className="trailer" onClick={() => hanleClick()}>
          Watch Trailer
        </div>
        <div className="video-container ">
          <iframe
            src={`https://autoembed.to/movie/imdb/${params?.id}`}
            width="100%"
            height="100%"
            // frameborder="0"
            title=""
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {onToggle === true ? (
          <div className="trailer-container">
            <div onClick={() => setOnToggle(false)} class="close-container">
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close">close</label>
            </div>
            <iframe
              src={`https://autoembed.to/trailer/movie/${params?.id}`}
              width="100%"
              height="100%"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </>
    </div>
  );
}
