import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieCart from "../components/MovieCart";

import { Context } from "../Context";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

export default function MovieDetails() {
  const params = useParams();
  const [data, setData] = React.useState(null);

  const { addToWatchList } = useContext(Context);

  useEffect(() => {
    fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);

  return (
    <div className="movie-detail-container">
      {data ? (
        <>
          <MovieCart filmData={data} onClick={addToWatchList} btnId="add-btn" />
          <div className="video-container">
            <iframe
              width="1271"
              height="715"
              src="https://www.youtube.com/embed/mqqft2x_Aa4"
              title="THE BATMAN – Main Trailer"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
