import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import FavouriteRoundedIcon from '@material-ui/icons/FavoriteRounded'; // Example import, adjust as needed
import Elements from './Elements'; // Adjust this import to your actual file

function Header({ currentUser }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link to="/" className={currentPath === "/" ? "active" : ""}>
          Signup
        </Link>
        <Link to="/podcasts" className={currentPath === "/podcasts" ? "active" : ""}>
          Podcasts
        </Link>
        <Link to="/create-a-podcast" className={currentPath === "/create-a-podcast" ? "active" : ""}>
          Start A Podcast
        </Link>
        <Link to="/profile" className={currentPath === "/profile" ? "active" : ""}>
          Profile
        </Link>
        {currentUser && (
          <Link to='/favourites' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <FavouriteRoundedIcon />
              <NavText>Favourites</NavText>
            </Elements>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
