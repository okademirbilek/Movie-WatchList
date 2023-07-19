import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
// import WatchListCart from "../components/WatchListCart";
import MovieCart from "../components/MovieCart";

function WatchList() {
  const { removeFromWachList, watchList } = useContext(Context);

  // const watchListElement = watchList.map((movie) => {
  //   return <WatchListCart key={movie.imdbID} filmData={movie} />;
  // });
  const watchListElement = watchList.map((movie) => {
    return (
      <MovieCart
        key={movie.imdbID}
        filmData={movie}
        onClick={removeFromWachList}
        btnId="remove-btn"
        wantSpace={true}
      />
    );
  });

  return (
    <>
      {watchList.length === 0 ? (
        <div className="empty-watchlist">
          <p>Your watchlist is looking a little empty...</p>
          <span className="add-btn-container">
            <Link to="/">
              <h6 id="add-btn-link"></h6>
            </Link>
            <h5>Lets add some movies!</h5>
          </span>
        </div>
      ) : (
        watchListElement
      )}
    </>
  );
}

export default WatchList;
