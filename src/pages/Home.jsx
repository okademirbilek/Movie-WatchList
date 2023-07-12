import { useState, useRef, useEffect } from "react";

import movieData from "../popularMovies.js";

import SearchBar from "../components/SearchBar.jsx";

import PopularMovies from "../components/PopularMovies.jsx";

import MovieCart from "../components/movieCart.jsx";
import SlickSlider from "../components/SlickSlider.jsx";

import useFetchAPI from "../hooks/useFetchAPI.jsx";
import PaginatedItems from "../components/PaginatedItems.jsx";

function Home() {
  const [isShown, setIsShown] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  console.log(pageCount);

  const [isDataReturn, setIsDataReturn] = useState(true);

  function setPopularMoviesHtml() {
    const popularMoviesArray = movieData;
    const popularMovies = popularMoviesArray.map((movie) => {
      return (
        <PopularMovies key={movie.id} movie={movie} justAlert={justAlert} />
      );
    });
    return popularMovies;
  }

  function justAlert(filmName) {
    console.log(filmName);
    setIsShown(true);
    useFetchAPI({
      query: filmName,
      setAllMovies,
      setIsDataReturn,
      setPageCount,
    });
  }

  const filmPage = allMovies.map((filmData) => {
    return <MovieCart key={filmData.imdbID} filmData={filmData} />;
  });

  return (
    <>
      <SearchBar
        setIsShown={setIsShown}
        setAllMovies={setAllMovies}
        setIsDataReturn={setIsDataReturn}
        setPageCount={setPageCount}
      />
      <div className="carousel">
        <SlickSlider justAlert={justAlert} />
      </div>

      <main id="main">
        {!isShown ? (
          <>
            <h2 className="movies-header">Trending Movies </h2>
            <div id="popular-movies-container">{setPopularMoviesHtml()}</div>
          </>
        ) : isDataReturn ? (
          <>
            {filmPage}
            <PaginatedItems
              itemsPerPage={10}
              items={allMovies}
              pageCount={pageCount}
              justAlert={justAlert}
            />
          </>
        ) : (
          <div className="error-msg">
            <h5>
              Unable to find what you’re looking for Please try another search
            </h5>
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
