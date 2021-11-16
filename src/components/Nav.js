import React from 'react'
import Matchups from './Matchups'
import {
    Link,
} from "react-router-dom";

function Nav(props) {
    console.log('navprops', props)
    const { teams, nflPlayers, avgFpts, avgFptsAgainst } = props
    return (
        <div className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/about">About League</Link>
            <Link to="/matchups">Matchups</Link>
        </div>
    )
}

export default Nav