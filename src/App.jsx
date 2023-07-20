import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import "./index.css";
import MovieDetails from "./pages/MovieDetails.jsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/:id" element={<MovieDetails />} />
            <Route path="/watchList" element={<WatchList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
