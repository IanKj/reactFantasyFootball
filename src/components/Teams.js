import React, { useState, useEffect } from 'react'

function Teams() {
    const [teams, setTeams] = useState([])
    const [nflPlayers, setNflPlayers] = useState({})
    const [sort, setSort] = useState('descending')

    async function getRosterInfo() {
        //pull all team info - players, roster_id, settings(points scored, etc....), starters
        const teams = await fetch('https://api.sleeper.app/v1/league/736382027170983936/rosters').then(resp => resp.json())
        const getTeamNames = async () => {
            return Promise.all(teams.map(async team => {
                const { display_name } = await fetch(`https://api.sleeper.app/v1/user/${team.owner_id}`).then(resp => resp.json())
                return { ...team, display_name }
            }))
        }
        const updatedData = await getTeamNames()
        setTeams(updatedData)
    }
    async function getNflPlayers() {
        //large file => each key matches 'player' from getRosterInfo, name is stored under 'full_name'
        const players = await fetch('./nflPlayers.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(resp => resp.json())
        setNflPlayers(players)
    }

    useEffect(() => {
        getRosterInfo()
        getNflPlayers()
    }, [])

    function genDisplay(sortBy) {
        let display
        if (sortBy === 'ascending') {
            display = teams.sort(function (a, b) {
                return a.settings.wins - b.settings.wins
            })
        }
        else if (sortBy === 'descending') {
            display = teams.sort(function (a, b) {
                return b.settings.wins - a.settings.wins
            })
        }
        else if (sortBy === 'pointsScored') {
            display = teams.sort(function (a, b) {
                return b.settings.fpts - a.settings.fpts
            })
        }
        else if (sortBy === 'pointsScoredAgainst') {
            display = teams.sort(function (a, b) {
                return b.settings.fpts_against - a.settings.fpts_against
            })
        }
        return display.map(team => {
            const { players, starters, display_name } = team
            const bench = players.filter(player => !starters.includes(player))
            const { wins, losses, fpts, fpts_against } = team.settings

            return (
                <div>
                    <h1>{display_name} ({wins}-{losses})</h1>
                    <h3> Points Scored: {fpts} </h3>
                    <h3>Points Against: {fpts_against} </h3>
                    <h2> Roster </h2>
                    <h3> Active: </h3>
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
        })
    }

    const sortOptions = [
        {
            label: 'Losers',
            value: 'ascending'
        },
        {
            label: 'Winners',
            value: 'descending'
        },
        {
            label: 'Points Scored Against',
            value: 'pointsScoredAgainst'
        },
        {
            label: 'Points Scored',
            value: 'pointsScored'
        }
    ]
    const selector =
        <div>
            <label htmlFor="sorter">Sort by: </label>
            <select id="sorter" value={sort} onChange={(e) => setSort(e.target.value)}>
                {sortOptions.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select >
        </div >

    return (
        <div>
            {selector}
            {genDisplay(sort)}
        </div>
    )
}

export default Teams