import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import "./index.css";
import MovieDetails from "./pages/MovieDetails.jsx";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AuthRequired from "./components/AuthRequired";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import movieData from "./popularMovies";
import Header from "./components/Header";
import PaginatedItems from "./components/PaginatedItems";
import PopularMovies from "./components/PopularMovies";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route element={<AuthRequired />}>
              <Route path="/" element={<Home />}>
                <Route
                  index
                  element={
                    <>
                      <h2 className="movies-header">Trending Movies </h2>
                      <div id="popular-movies-container">
                        {movieData.map((movie) => {
                          return <PopularMovies key={movie.id} movie={movie} />;
                        })}
                      </div>
                    </>
                  }
                />
                <Route
                  path="/search/:movie/:page"
                  element={<PaginatedItems />}
                />
              </Route>
              <Route path="details/:id" element={<MovieDetails />} />
              <Route path="/watchList" element={<WatchList />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
          <SnackbarProvider autoHideDuration={1000} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
