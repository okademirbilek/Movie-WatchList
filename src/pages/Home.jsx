import { useState, useRef } from "react";

import SearchBar from "../components/SearchBar.jsx";

import SlickSlider from "../components/SlickSlider.jsx";

import { Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Home() {
  const [currentMovieName, setCurrentMovieName] = useState("");

  const focusDiv = useRef(null);

  const location = useLocation();

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
