import { Link } from "react-router-dom";
import WatchListIcon from "../images/icons8-popcorn-4.png";

function Header() {
  return (
    <header id="header">
      <Link to="/">
        <button className="glowing-btn">
          <span className="glowing-txt">
            MO<span className="faulty-letter">V</span>IE
          </span>
        </button>
      </Link>
      <Link to="/watchList">
        MY WATCHLIST
        <img src={WatchListIcon} className="popcorn-icon"></img>
      </Link>
    </header>
  );
}

export default Header;
