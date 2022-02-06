import React from 'react'

import {
    Link,
} from "react-router-dom";

function Nav(props) {
    const { teams, nflPlayers, avgFpts, avgFptsAgainst } = props
    return (
        <div className="nav-container">
            <Link to="/reactFantasyFootball">Home</Link> <span>|</span>
            <Link to="/about">About League</Link><span>|</span>
            <Link to="/matchups">Matchups</Link><span>|</span>
            <Link to="/headtohead">Head to Head</Link><span>|</span>
            <Link to="/playoffs">Playoffs</Link>
            {/* <Link to="/maxpointstotals">Max Points </Link> */}
        </div>
    )
}

export default Nav