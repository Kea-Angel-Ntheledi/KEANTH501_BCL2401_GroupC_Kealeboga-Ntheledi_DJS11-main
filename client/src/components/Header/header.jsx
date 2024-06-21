import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "firebase/auth";
import { clearUser } from "../../slices/userSlice";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="navbar">

            <div className="gradient"></div>

            <div className="links">
                
                <Link to="/" className={currentPath == "/" ? "active" : ""}>
                    Signup
                </Link>

                <Link to="/podcasts" className={currentPath == "/podcasts" ? "active" : ""}>
                    Podcast
                </Link>

                <Link to="/start-a-podcast"  className={currentPath == "/start-a-podcast" ? "active" : ""}>
                    Start A Podcast
                </Link>

                <Link to="/profile" className={currentPath == "/profile" ? "active" : ""}>
                    Profile
                </Link>

            </div>
        </div>
    )
}

export default Header;

