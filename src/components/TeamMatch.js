import React from 'react'

function TeamMatch(props) {
    const { players, starters, display_name } = props.team
    const { wins, losses, fpts, fpts_against } = props.team.settings
    const bench = players.filter(player => !starters.includes(player))
    const nflPlayers = props.nflPlayers
    return (
        <div className="roster-container">
            <h1>{display_name} ({wins}-{losses})</h1>

            <h3 > Points Scored: {fpts} </h3>


            <h3>Points Against: {fpts_against} </h3>
            <h3> Starters: </h3>
            <ol>
                {starters.map(player => {
                    //get name of player from nflPlayers
                    //full_name doesn't exist for 
                    const { position, first_name, last_name } = nflPlayers[player] || {}
                    return <li>{player !== '0' ? `${position}) ${first_name} ${last_name}` : 'Empty'}</li>
                })}
            </ol>
            <h3> Bench: </h3>
            <ol>
                {bench.map(player => {
                    const { position, first_name, last_name } = nflPlayers[player] || {}
                    return <li>{player !== '0' ? `${position}) ${first_name} ${last_name}` : 'Empty'}</li>
                })}
            </ol>
        </div>
    )
}
export default TeamMatch