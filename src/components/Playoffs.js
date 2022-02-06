import React, { useEffect } from 'react'

function Playoffs(props) {

    const { matchupWeeks } = props


    useEffect(() => {
        console.log(matchupWeeks)
        fetch('https://api.sleeper.app/v1/league/736382027170983936/winners_bracket')
            .then(resp => resp.json())
            .then(data => console.log(data))
    }, [])
    return (
        <p>Playoffs!</p>
    )
}

export default Playoffs