import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";
import MovieCart from "../components/movieCart.jsx";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

function PaginatedItems({ currentMovieName }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const { loading, error, value } = useFetch(
    `https://omdbapi.com/?apikey=${apiKey}&s=${currentMovieName}&page=${
      currentPage + 1
    }&type=movie`,
    {},
    [currentMovieName, currentPage]
  );

  useEffect(() => {
    setCurrentPage(0);
  }, [currentMovieName]);

  useEffect(() => {
    if (!loading) {
      if (value.Response === "True") {
        let filmPage = value.Search.map((filmData) => {
          return <MovieCart key={filmData.imdbID} filmData={filmData} />;
        });
        setCurrentItems(filmPage);
        let numberOfPage = Math.ceil(value.totalResults / 10);
        setPageCount(numberOfPage);
      } else if (value.Response === "False") {
        let errorMsg = (
          <div className="error-msg">
            <h5>
              Unable to find what you’re looking for Please try another search
            </h5>
          </div>
        );
        setCurrentItems(errorMsg);
      }
    }
  }, [currentMovieName, currentPage, loading]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      {currentItems}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        forcePage={currentPage}
      />
    </>
  );
}

export default PaginatedItems;
