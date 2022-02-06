import React from 'react'

function Matchup(props) {
    console.log(props)
    const { matchup } = props
    const [player1, player2] = matchup
    console.log(player1, player2)
    const player1Bench = player1.players.filter(player => !player1.starters.includes(player))
    const player2Bench = player2.players.filter(player => !player2.starters.includes(player))
    const nflPlayers = props.nflPlayers

    return (
        <div className="matchup-container">

            <div className='roster-container'>
                <h4>{player1.display_name} - {player1.points} points</h4>
                <h3> Starters: </h3>
                <ol>
                    {player1.starters.map(player => {
                        const { position, first_name, last_name } = nflPlayers[player] || {}
                        return <li>{player !== '0' ? `${position}) ${first_name} ${last_name} | ${player1.players_points[player]} ` : 'Empty'}</li>
                    })}
                </ol>

                <h3> Bench: </h3>
                <ol>
                    {player1Bench.map(player => {

                        const { position, first_name, last_name } = nflPlayers[player] || {}
                        return <li>{player !== '0' ? `${position}) ${first_name} ${last_name} | ${player1.players_points[player]}` : 'Empty'}</li>
                    })}
                </ol>
            </div>

            <p> vs </p>

            <div className='roster-container'>
                <h4>{player2.display_name} - {player2.points} points</h4>
                <h3> Starters: </h3>
                <ol>
                    {player2.starters.map(player => {
                        const { position, first_name, last_name } = nflPlayers[player] || {}
                        return <li>{player !== '0' ? `${position}) ${first_name} ${last_name} | ${player2.players_points[player]}` : 'Empty'}</li>
                    })}
                </ol>

                <h3> Bench: </h3>
                <ol>
                    {player2Bench.map(player => {
                        const { position, first_name, last_name } = nflPlayers[player] || {}
                        return <li>{player !== '0' ? `${position}) ${first_name} ${last_name} | ${player2.players_points[player]}` : 'Empty'}</li>
                    })}
                </ol>
            </div>
        </div>
    )
}
export default Matchup