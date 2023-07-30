import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";
import MovieCart from "./MovieCart.jsx";

import { useAuth } from "../context/AuthContext";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

function PaginatedItems({
  currentMovieName,
  setCurrentPage,
  currentPage,
  focusDiv,
}) {
  const { addNewMovie } = useAuth();

  const { loading, error, value } = useFetch(
    `https://omdbapi.com/?apikey=${apiKey}&s=${currentMovieName}&page=${
      currentPage + 1
    }&type=movie`,
    {},
    [currentMovieName, currentPage]
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    focusDiv.current.scrollIntoView();
  };

  if (loading) {
    return <h1 className="error-msg">Loading...</h1>;
  }

  if (value) {
    if (value.Response === "False") {
      return <h1 className="error-msg">Error: {value.Error}</h1>;
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
        initialPage={currentPage}
      />
    </>
  );
}

export default PaginatedItems;

// import React, { useEffect, useState, useContext } from "react";
// import ReactPaginate from "react-paginate";
// import useFetch from "../hooks/useFetch";
// import MovieCart from "./MovieCart.jsx";

// import { Context } from "../Context";

// const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

// function PaginatedItems({
//   currentMovieName,
//   setCurrentPage,
//   currentPage,
//   focusDiv,
// }) {
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);

//   const { addToWatchList } = useContext(Context);

//   const { loading, error, value } = useFetch(
//     `https://omdbapi.com/?apikey=${apiKey}&s=${currentMovieName}&page=${
//       currentPage + 1
//     }&type=movie`,
//     {},
//     [currentMovieName, currentPage]
//   );

//   useEffect(() => {
//     // console.log("2.useeffect calıstı");
//     if (loading === false) {
//       if (value.Response === "True") {
//         const filmPage = value.Search.map((filmData) => {
//           return (
//             <MovieCart
//               key={filmData.imdbID}
//               filmData={filmData}
//               onClick={addToWatchList}
//               btnId="add-btn"
//               wantSpace={true}
//             />
//           );
//         });
//         setCurrentItems(filmPage);
//         // console.log("filmpage", filmPage);
//         const numberOfPage = Math.ceil(value.totalResults / 10);
//         setPageCount(numberOfPage);
//         // console.log("numberofpage", numberOfPage);
//       } else if (value.Response === "False") {
//         let errorMsg = (
//           <div className="error-msg">
//             <h5>
//               Unable to find what you’re looking for Please try another search
//             </h5>
//           </div>
//         );
//         setCurrentItems(errorMsg);
//       }
//     }
//   }, [currentPage, currentMovieName, loading]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//     focusDiv.current.scrollIntoView();
//   };

//   //error handling
//   if (error) {
//     return error;
//   }

//   return (
//     <>
//       {currentItems}
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="Next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< Previous"
//         renderOnZeroPageCount={null}
//         containerClassName="pagination"
//         pageLinkClassName="page"
//         previousLinkClassName="page-num"
//         nextLinkClassName="page-num"
//         activeLinkClassName="active"
//         forcePage={currentPage}
//       />
//     </>
//   );
// }

// export default PaginatedItems;
