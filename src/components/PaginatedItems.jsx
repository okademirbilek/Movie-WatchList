import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetch from "../hooks/useFetch";
import MovieCart from "./MovieCart.jsx";

const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

function PaginatedItems({ currentMovieName, setCurrentPage, currentPage }) {
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
    // console.log("2.useeffect calıstı");
    if (loading === false) {
      if (value.Response === "True") {
        const filmPage = value.Search.map((filmData) => {
          return <MovieCart key={filmData.imdbID} filmData={filmData} />;
        });
        setCurrentItems(filmPage);
        // console.log("filmpage", filmPage);
        const numberOfPage = Math.ceil(value.totalResults / 10);
        setPageCount(numberOfPage);
        // console.log("numberofpage", numberOfPage);
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
  }, [currentPage, currentMovieName, loading]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      {loading === false ? currentItems : ""}
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

// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import useFetch from "../hooks/useFetch";
// import MovieCart from "./MovieCart.jsx";

// const apiKey = import.meta.env.VITE_REACT_APP_OMDB_KEY;

// function PaginatedItems({ currentMovieName, setCurrentPage, currentPage }) {
//   // const [currentPage, setCurrentPage] = useState(0);
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);

//   const firstRender = React.useRef(true);

//   const fetchData = async (controller) => {
//     const response = await fetch(
//       `https://omdbapi.com/?apikey=${apiKey}&s=${currentMovieName}&page=${
//         currentPage + 1
//       }&type=movie`,
//       { signal: controller.signal }
//     );
//     const data = await response.json();
//     if (data.Response) {
//       console.log(data);
//       const filmPage = data.Search.map((filmData) => {
//         return <MovieCart key={filmData.imdbID} filmData={filmData} />;
//       });
//       setCurrentItems(filmPage);
//       console.log("filmpage", filmPage);
//       const numberOfPage = Math.ceil(data.totalResults / 10);
//       setPageCount(numberOfPage);
//     } else {
//       let errorMsg = (
//         <div className="error-msg">
//           <h5>
//             Unable to find what you’re looking for Please try another search
//           </h5>
//         </div>
//       );
//       setCurrentItems(errorMsg);
//     }
//   };

//   useEffect(() => {
//     const controller = new AbortController();
//     console.log("film  name changed");
//     //to prevent unnecessary render on first call
//     fetchData(controller).catch((err) => console.log(err));
//     return () => {
//       console.log("aborted1");
//       controller.abort();
//     };
//   }, [currentMovieName]);

//   useEffect(() => {
//     const controller = new AbortController();
//     if (firstRender.current) {
//       firstRender.current = false;
//     } else {
//       console.log("current page changed");

//       fetchData(controller).catch((err) => console.log(err));
//     }
//     return () => {
//       console.log("aborted2");
//       controller.abort();
//     };
//   }, [currentPage]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

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
