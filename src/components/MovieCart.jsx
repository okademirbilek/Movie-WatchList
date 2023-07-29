import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MovieCart({
  filmData,
  onClick,
  btnId,
  wantSpace = false,
  detailPage = true,
}) {
  // const { watchList } = useContext(Context);
  const { movieData } = useAuth();
  //check if the film already in the watchlist
  let isExist = null;
  if (btnId === "add-btn") {
    isExist = movieData.some(
      (filmList) => filmList["imdbID"] === filmData.imdbID
      // (filmList) => filmList["id"] === filmData.id
    );
  }

  // console.log(isExist);

  const detail = btnId === "add-btn" ? filmData : filmData.id;

  return (
    <>
      {wantSpace && <hr></hr>}
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

          {detailPage ? (
            <Link to={`/details/${filmData.imdbID}`}>Go to detail page</Link>
          ) : null}

          <div className="film-genre">
            <h4>{filmData.Runtime}</h4>
            <h5>{filmData.Genre}</h5>
          </div>
          <div className="btn-container">
            <button
              id={btnId}
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
    </>
  );
}

export default MovieCart;
