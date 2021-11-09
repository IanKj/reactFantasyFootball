import React, { useState, useEffect } from 'react'

function Teams() {
    const [teams, setTeams] = useState([])

    async function getRosterInfo() {
        //pull all team info - players, roster_id, settings(points scored, etc....), starters
        const teams = await fetch('https://api.sleeper.app/v1/league/736382027170983936/rosters').then(resp => resp.json())
        const getTeamNames = async () => {
            return Promise.all(teams.map(async team => {
                const { username } = await fetch(`https://api.sleeper.app/v1/user/${team.owner_id}`).then(resp => resp.json())
                return { ...team, username }
            }))
        }
        const updatedData = await getTeamNames()
        setTeams(updatedData)
    }

    useEffect(() => {
        getRosterInfo()
    }, [])

    const teamsDOM = teams.sort(function (a, b) {
        return b.settings.wins - a.settings.wins
    })
        .map(team => {
            const { players, starters, username } = team
            const bench = players.filter(player => !starters.includes(player))
            const { wins, losses, fpts, fpts_against } = team.settings
            return (
                <div>
                    <h1>{username} ({wins}-{losses})</h1>
                    <h3> Points Scored: {fpts} </h3>
                    <h3>Points Against: {fpts_against} </h3>
                    <h2> Roster </h2>
                    <h3> Active: </h3>
                    <ol>
                        {starters.map(player => {
                            return <li>{player}</li>
                        })}
                    </ol>
                    <h3> Bench: </h3>
                    <ol>
                        {bench.map(player => {
                            return <li>{player}</li>
                        })}
                    </ol>
                </div>
            )
        })
    return (
        <div>
            {teamsDOM}
        </div>
    )
}

export default Teams