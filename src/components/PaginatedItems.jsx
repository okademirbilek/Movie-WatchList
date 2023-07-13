import React from "react";
import ReactPaginate from "react-paginate";

function PaginatedItems({ itemsPerPage, items, currentMovieInfo, justAlert }) {
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(event.selected);
    let currentPage = event.selected + 1;

    console.log("current PAge ", currentPage);
    justAlert({
      filmName: currentMovieInfo.currentMovieName,
      currentPage: currentPage,
    });
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={currentMovieInfo.pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
