import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import "./index.css";
import MovieDetails from "./pages/MovieDetails.jsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import AuthRequired from "./components/AuthRequired";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route element={<AuthRequired />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="details/:id" element={<MovieDetails />} />
                <Route path="/watchList" element={<WatchList />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
