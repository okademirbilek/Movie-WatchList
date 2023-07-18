import { useState } from "react";

import movieData from "../popularMovies.js";

import SearchBar from "../components/SearchBar.jsx";

import PopularMovies from "../components/PopularMovies.jsx";

import SlickSlider from "../components/SlickSlider.jsx";

import PaginatedItems from "../components/PaginatedItems.jsx";

function Home() {
  const [isShown, setIsShown] = useState(false);
  const [currentMovieName, setCurrentMovieName] = useState("");

  function setPopularMoviesHtml() {
    const popularMoviesArray = movieData;
    const popularMovies = popularMoviesArray.map((movie) => {
      return <PopularMovies key={movie.id} movie={movie} />;
    });
    return popularMovies;
  }

  return (
    <>
      <SearchBar
        setCurrentMovieName={setCurrentMovieName}
        setIsShown={setIsShown}
      />
      <div className="carousel">
        <SlickSlider />
      </div>

      <main id="main">
        {!isShown ? (
          <>
            <h2 className="movies-header">Trending Movies </h2>
            <div id="popular-movies-container">{setPopularMoviesHtml()}</div>
          </>
        ) : (
          <>
            <PaginatedItems
              itemsPerPage={10}
              currentMovieName={currentMovieName}
            />
          </>
        )}
      </main>
    </>
  );
}

export default Home;
