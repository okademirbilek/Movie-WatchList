import React from "react";
import ReactPaginate from "react-paginate";

function PaginatedItems({ currentMovieInfo, justAlert }) {
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(event.selected);
    let currentPage = event.selected + 1;

    console.log("current Page ", currentPage);
    justAlert({
      filmName: currentMovieInfo.currentMovieName,
      currentPage: currentPage,
    });
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={currentMovieInfo.pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default PaginatedItems;
