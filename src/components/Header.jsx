import { Link } from "react-router-dom";
import WatchListIcon from "../images/icons8-popcorn-4.png";
import avatar from "../images/avatar-img.png";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function Header() {
  const { currentUser } = useAuth();
  const location = useLocation();

  //if there is no user and your path is not defined and pathname update-profile
  //currentUser already handle the conditional render but incase i add the extra path
  if (
    !currentUser ||
    location.pathname === "/update-profile" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    (location.key === "default" && location.pathname !== "/")
  ) {
    return null;
  }

  return (
    <header id="header">
      <Link to="/">
        <button className="glowing-btn">
          <span className="glowing-txt">
            MO<span className="faulty-letter">V</span>IE
          </span>
        </button>
      </Link>
      <nav>
        <Link to="/watchList">
          MY WATCHLIST
          <img src={WatchListIcon} className="popcorn-icon"></img>
        </Link>
        <Link to="/dashboard">
          <div className="user-link">
            <img src={avatar} className="avatar-icon"></img>
            <h5>{currentUser?.displayName || "MovieStar123"}</h5>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
