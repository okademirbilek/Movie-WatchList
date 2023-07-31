import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";
import MovieCart from "./MovieCart.jsx";

import { useOutletContext } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import useEffectOnUpdate from "../hooks/useEffectOnUpdate";

import { useParams } from "react-router-dom";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

import { useNavigate } from "react-router-dom";

function PaginatedItems() {
  const { addNewMovie } = useAuth();
  const { currentMovieName, setCurrentMovieName, focusDiv } =
    useOutletContext();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(params?.page));

  const navigate = useNavigate();

  useEffectOnUpdate(() => {
    if (isNaN(parseInt(params.page))) {
      alert("bırak lan path ile oynamayı");
      navigate(`/`);
      setCurrentPage(1);
    } else {
      console.log();
      setCurrentPage(parseInt(params.page));
    }
  }, [params.page]);

  useEffect(() => {
    setCurrentMovieName(params.movie);
  }, [params.movie]);

  const { loading, error, value } = useFetch(
    `https://omdbapi.com/?apikey=${apiKey}&s=${
      params?.movie || currentMovieName
    }&page=${params?.page || currentPage}&type=movie`,
    {},
    [params.movie, params.page]
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    navigate(`/search/${params.movie}/${event.selected + 1}`);
    focusDiv.current.scrollIntoView();
  };

  if (loading) {
    return <h1 className="error-msg">Loading...</h1>;
  }

  if (value) {
    if (value.Response === "False") {
      return <h1 className="error-msg">{value.Error}</h1>;
    }
  }

  if (error) {
    return (
      <div className="error-msg">
        Unable to find what you’re looking for Please try another search
        {JSON.stringify(error, null, 2)}
      </div>
    );
  }

  return (
    <>
      <h2>Searched Movie Results</h2>
      {value &&
        value.Search.map((filmData) => {
          return (
            <MovieCart
              key={filmData.imdbID}
              filmData={filmData}
              onClick={addNewMovie}
              // onClick={addToWatchList}
              btnId="add-btn"
              wantSpace={true}
            />
          );
        })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(value.totalResults / 10)}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        forcePage={currentPage - 1}
      />
    </>
  );
}

export default PaginatedItems;
