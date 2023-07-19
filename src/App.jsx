import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import "./index.css";
import { SnackbarProvider } from "notistack";
import MovieDetails from "./pages/MovieDetails.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/watchList" element={<WatchList />} />
      </Routes>
      <SnackbarProvider autoHideDuration={1000} />
    </div>
  );
}

export default App;
