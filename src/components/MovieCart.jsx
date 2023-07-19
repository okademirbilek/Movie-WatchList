import { useContext } from "react";
import { Context } from "../Context";

function MovieCart({ filmData, onClick, btnId, wantSpace = false }) {
  const { watchList } = useContext(Context);
  //check if the film already in the watchlist
  let isExist = null;
  if (btnId === "add-btn") {
    isExist = watchList.some(
      (filmList) => filmList["imdbID"] === filmData.imdbID
    );
  }

  const detail = btnId === "add-btn" ? filmData : filmData.imdbID;

  return (
    <>
      <div className="film-container">
        {/* <object data={filmData.Poster} className="movie-image">
                <img src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt={`${filmData.Title} Poster`}></img>
            </object> */}

        {filmData.Poster !== "N/A" ? (
          <img
            src={filmData.Poster}
            className="movie-image"
            alt={`${filmData.Title} Poster`}
          />
        ) : (
          <img
            src="https://www.omdbapi.com/src/poster.jpg"
            className="movie-image"
          />
        )}

        <div className="film-info">
          <div className="film-name">
            <h3>{filmData.Title}</h3>
            <p>⭐</p>
            <h5>{filmData.imdbRating}</h5>
          </div>

          <div className="film-genre">
            <h4>{filmData.Runtime}</h4>
            <h5>{filmData.Genre}</h5>
          </div>
          <div className="btn-container">
            <button
              // id="add-btn"
              id={btnId}
              // onClick={() => addToWatchList(filmData)}
              onClick={() => onClick(detail)}
              disabled={isExist}
            ></button>
            <h6>Add To Watchlist</h6>
          </div>
        </div>
        <div className="film-plot">
          <p>{filmData.Plot}</p>
        </div>
      </div>
      {wantSpace && <hr></hr>}
    </>
  );
}

export default MovieCart;
