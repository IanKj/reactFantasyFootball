import React from 'react'
import {
    Link
} from "react-router-dom";

function Nav() {
    return (
        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/about">About League</Link>
            <Link to="/matchups">Matchups</Link>
        </div>
    )
}

export default Nav