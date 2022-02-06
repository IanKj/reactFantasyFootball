import React, { useState } from 'react'

import Matchup from './Matchup'

function Matchups(props) {
    const { teams, nflPlayers, matchupWeeks } = props
    const [week, setWeek] = useState(0)

    function getUsername(teams, rosterID) {
        const username = teams.filter(team => team.roster_id === rosterID)
        return username[0].display_name
    }


    // THE BUG IS HERE...NOT DYNAMIC WITH PLAYOFFS AND NULL MATCHUP IDS
    function getMatchups(week) {
        console.log(week)
        const matchups = []
        for (let i = 1; i < 6; i++) {
            matchups.push(week.filter(player => {
                player.display_name = getUsername(teams, player.roster_id)
                return player.matchup_id === i
            }))
        }
        return matchups
    }

    const allMatchups = matchupWeeks.map(week => {
        return getMatchups(week)
    })

    const genMatchupDisplay = (weekOfMatchups) => {
        console.log(weekOfMatchups)
        return weekOfMatchups.map(matchup => {
            return (
                <Matchup matchup={matchup} nflPlayers={nflPlayers} />
            )
        })
    }

    const selector =
        <div>
            <label htmlFor="sorter">Sort by: </label>
            <select id="sorter" value={week} onChange={(e) => setWeek(e.target.value)}>
                {allMatchups.map((week, index) => {
                    if (index < 14) {
                        return <option value={index}>{`Week ${index + 1}`}</option>
                    }
                })}
                <option>Playoffs Round 1</option>
            </select >

        </div >


    return (
        <div className="allMatchups-container">
            <h2>Matchups!</h2>
            {selector}
            {genMatchupDisplay(allMatchups[week])}
        </div>
    )
}

export default Matchups

