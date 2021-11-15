import React, { useState, useEffect } from 'react'
import '../index.css'
import Team from './Team'

function Teams() {
    const [teams, setTeams] = useState([])
    const [nflPlayers, setNflPlayers] = useState({})
    const [sort, setSort] = useState('descending')
    const [avgFpts, setAvgFpts] = useState(0)
    const [avgFptsAgainst, setAvgFptsAgainst] = useState(0)

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
        const avgPointsScored = updatedData.map(team => {
            return team.settings.fpts
        }).reduce((a, b) => a + b)
        const avgPointsScoredAgainst = updatedData.map(team => {
            return team.settings.fpts_against
        }).reduce((a, b) => a + b)
        setTeams(updatedData)
        setAvgFpts(avgPointsScored / updatedData.length)
        setAvgFptsAgainst(avgPointsScoredAgainst / updatedData.length)

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
            return (
                <Team team={team} nflPlayers={nflPlayers} avgFpts={avgFpts} avgFptsAgainst={avgFptsAgainst} />
            )
        })
    }

    const sortOptions = [
        {
            label: 'Winners',
            value: 'descending'
        },
        {
            label: 'Losers',
            value: 'ascending'
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
            <h3>League Average Points Scored: {avgFpts}</h3>
            {genDisplay(sort)}
        </div>
    )
}

export default Teams