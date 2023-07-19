import { useState } from "react";

function SearchBar({ setIsShown, setCurrentMovieName, setCurrentPage }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsShown(true);
    setCurrentPage(0);
    setCurrentMovieName(query);
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
            minLength={3}
          ></input>
        </div>
        <button id="search-btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
