import React from 'react'
import {
    Link
} from "react-router-dom";

function Nav() {
    return (
        <div>
            <p>This is my navbar</p>
            <Link to="/">Home</Link>
            <Link to="/about">About League</Link>
        </div>
    )
}

export default Nav