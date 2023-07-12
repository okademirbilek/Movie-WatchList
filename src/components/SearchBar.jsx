import { useState, useRef } from "react";
import useFetchAPI from "../hooks/useFetchAPI";

// const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

function SearchBar({
  setIsShown,
  setAllMovies,
  setIsDataReturn,
  setPageCount,
}) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    //changing cursor state
    setLoading(true);
    setIsShown(true);
    useFetchAPI({
      query,
      setAllMovies,
      setIsDataReturn,
      setLoading,
      setPageCount,
    });
  };

  return (
    <section className="search-bar-container">
      <form id="search-form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input
            id="movie-name"
            type="text"
            placeholder="Search a movie"
            onChange={handleChange}
            value={query}
            required
          ></input>
        </div>
        <button id="search-btn" type="submit" disabled={loading}>
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
