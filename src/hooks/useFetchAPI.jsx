import React from "react";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

async function useFetchAPI({
  currentPage,
  query,
  setAllMovies,
  setIsDataReturn,
  setLoading = () => {},
  setCurrentMovieInfo,
}) {
  let movieID = [];
  const allFilms = [];
  document.body.style.cursor = "progress";
  //fetching data
  const response = await fetch(
    `https://omdbapi.com/?apikey=${apiKey}&s=${query}&page=${currentPage}&type=movie`
  );
  const data = await response.json();

  //page calculation
  // console.log("number of movies", data.totalResults);
  let numberOfPage = Math.ceil(data.totalResults / 10);

  // console.log("number of page we need", numberOfPage);

  //Catching error if there is an incorrect search
  if (data.Response === "False") {
    setIsDataReturn(false);
    setLoading(false);
    document.body.style.cursor = "default";
  } else {
    setIsDataReturn(true);
    //Pushing Data to movie id array we have to hold all the film imdbID's because
    //We cannot reach film data with a name search.
    // console.log(data.Search)
    for (let film of data.Search) {
      // setMovieId(prevMovie => [...prevMovie,film.imdbID])
      movieID.push(film.imdbID);
    }

    for (let filmID of movieID) {
      await fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${filmID}`)
        .then((res) => {
          console.log(res.ok);
          if (!res.ok) {
            throw Error(res.status, res.ok);
          }
          return res.json();
        })
        .then((filmData) => {
          allFilms.push(filmData);
        })
        .catch((err) => console.error(err));
    }
    setAllMovies(allFilms);
    setLoading(false);
    setCurrentMovieInfo({
      pageCount: numberOfPage,
      currentMovieName: query,
    });
    document.body.style.cursor = "default";
  }
}

export default useFetchAPI;
