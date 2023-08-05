import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ setCurrentMovieName, focusDiv }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const cakir = encodeURI(query);
    const queryForApi = cakir.split("%20").join("+");
    setCurrentMovieName(queryForApi);
    navigate(`/search/${queryForApi}/${1}`);
    focusDiv.current.scrollIntoView();
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
            className="film-input"
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
