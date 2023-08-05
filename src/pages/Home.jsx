import { useState, useRef } from "react";

import SearchBar from "../components/SearchBar.jsx";

import SlickSlider from "../components/SlickSlider.jsx";

import { Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Home() {
  const [currentMovieName, setCurrentMovieName] = useState("");

  const focusDiv = useRef(null);

  const location = useLocation();
  // console.log(location);

  return (
    <>
      {(location.key === "default" && location.pathname === "/") ||
      location.key !== "default" ? (
        <>
          <SearchBar
            setCurrentMovieName={setCurrentMovieName}
            focusDiv={focusDiv}
          />
          <div className="carousel" ref={focusDiv}>
            <SlickSlider />
          </div>
        </>
      ) : null}

      <main id="main">
        <Outlet
          context={{
            focusDiv,
            currentMovieName,
            setCurrentMovieName,
          }}
        />
      </main>
    </>
  );
}

export default Home;

// import { useState, useRef } from "react";

// import movieData from "../popularMovies.js";

// import SearchBar from "../components/SearchBar.jsx";

// import PopularMovies from "../components/PopularMovies.jsx";

// import SlickSlider from "../components/SlickSlider.jsx";

// import PaginatedItems from "../components/PaginatedItems.jsx";

// function Home() {
//   const [isShown, setIsShown] = useState(false);
//   const [currentMovieName, setCurrentMovieName] = useState("");
//   const [currentPage, setCurrentPage] = useState(0);

//   const focusDiv = useRef(null);

//   // console.log("CurrentMovieName:", currentMovieName);
//   function setPopularMoviesHtml() {
//     const popularMoviesArray = movieData;
//     const popularMovies = popularMoviesArray.map((movie) => {
//       return <PopularMovies key={movie.id} movie={movie} />;
//     });
//     return popularMovies;
//   }

//   return (
//     <>
//       <SearchBar
//         setCurrentMovieName={setCurrentMovieName}
//         setCurrentPage={setCurrentPage}
//         setIsShown={setIsShown}
//       />
//       <div className="carousel" ref={focusDiv}>
//         <SlickSlider />
//       </div>

//       <main id="main">
//         {!isShown ? (
//           <>
//             <h2 className="movies-header">Trending Movies </h2>
//             <div id="popular-movies-container">{setPopularMoviesHtml()}</div>
//           </>
//         ) : (
//           <>
//             <PaginatedItems
//               currentMovieName={currentMovieName}
//               setCurrentPage={setCurrentPage}
//               currentPage={currentPage}
//               focusDiv={focusDiv}
//             />
//           </>
//         )}
//       </main>
//     </>
//   );
// }

// export default Home;
