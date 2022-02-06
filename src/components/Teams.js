import React, { useState } from 'react'
import '../index.css'
import Team from './Team'

function Teams(props) {
    const { teams, nflPlayers, avgFpts, avgFptsAgainst } = props
    const [sort, setSort] = useState('descending')

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
        return display.map((team, index) => {
            return (
                <Team key={index} team={team} nflPlayers={nflPlayers} avgFpts={avgFpts} avgFptsAgainst={avgFptsAgainst} />
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
        <div className='teams-container'>
            <h2>General Stats!</h2>
            {selector}
            <h3>League Average Points Scored: {avgFpts}</h3>
            {genDisplay(sort)}
        </div>
    )
}

export default Teams