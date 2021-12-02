import React, { useState } from 'react'
import Matchup from './Matchup'

function Matchups(props) {
    const { teams, nflPlayers, matchupWeeks } = props
    console.log(matchupWeeks)
    const [week, setWeek] = useState(matchupWeeks.length - 1)

    function getUsername(teams, rosterID) {
        const username = teams.filter(team => team.roster_id === rosterID)
        return username[0].display_name
    }

    function getMatchups(week) {
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
                {allMatchups.map((week, index) => (
                    <option value={index}>{`Week ${index + 1}`}</option>
                ))}
            </select >
        </div >


    // this will display all matchups
    // const matchUpsDOM = allMatchups.map((week, index) => {
    //     return (
    //         <div>
    //             <h3>Week {index + 1}</h3>
    //             {week.map(matchup => {
    //                 return (
    //                     <div>
    //                         <Matchup matchup={matchup} nflPlayers={nflPlayers} />
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     )
    // })

    return (
        <div className="allMatchups-container">
            <h2>Matchups!</h2>
            {selector}
            {genMatchupDisplay(allMatchups[week])}
        </div>
    )
}

export default Matchups

