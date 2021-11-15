import React, { useState, useEffect } from 'react'
import Nav from './Nav'

function Matchups() {
    const [matchupWeeks, setMatchupWeeks] = useState([])

    async function getMatchupHistory() {
        const matchupArr = []
        const { week } = await fetch("https://api.sleeper.app/v1/state/nfl").then(resp => resp.json())
        for (let i = 1; i < week + 1; i++) {
            const weekMatchups = await fetch(`https://api.sleeper.app/v1/league/736382027170983936/matchups/${i}`).then(resp => resp.json())
            matchupArr.push({ weekMatchups, week: i })
        }
        setMatchupWeeks(matchupArr)

    }

    useEffect(() => {
        getMatchupHistory()
    }, [])

    const matchupsDOM = matchupWeeks.map(week => {
        let matchups = []
        for (let i = 1; i < 6; i++) {
            matchups.push(week.weekMatchups.filter(match => match.matchup_id === i))
        }
        return matchups

    })
    console.log(matchupsDOM)

    return (
        <div>
            <Nav />
            <h2>Matchups!</h2>
        </div>
    )
}

export default Matchups

/* loop through mathchups Array
    for each week matchup set
        loop through each individual match
        find two matches with equal matchup_id
            if matchup_id matches and roster_id doesn't match

*/
