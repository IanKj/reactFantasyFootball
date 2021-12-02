import React from 'react'

import {
    Link,
} from "react-router-dom";

function Nav(props) {
    const { teams, nflPlayers, avgFpts, avgFptsAgainst } = props
    return (
        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/about">About League</Link>
            <Link to="/matchups">Matchups</Link>
            <Link to="/headtohead">Head to Head</Link>
        </div>
    )
}

export default Nav