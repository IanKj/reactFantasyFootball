import { getAllByAltText } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

function HeadToHead(props) {
    const { teams, matchupWeeks } = props
    const [playerOne, setPlayerOne] = useState(1)
    const [playerTwo, setPlayerTwo] = useState(7)
    const [playerOneDropdown, setPlayerOneDropdown] = useState(teams.filter(team => team.roster_id !== playerTwo))
    const [playerTwoDropdown, setPlayerTwoDropdown] = useState(teams.filter(team => team.roster_id !== playerOne))
    const [playerOneMatches, setPlayerOneMatches] = useState([])
    const [playerTwoMatches, setPlayerTwoMatches] = useState([])
    const [matchUpHistory, setMatchUpHistory] = useState([])
    const [matchUpStats, setMatchUpStats] = useState(
        {
            playerOneWins: 0,
            playerTwoWins: 0,
            playerOneTotalPoints: 0,
            playerTwoTotalPoints: 0
        }
    )

    console.log(matchUpStats)

    useEffect(() => {
        masterCalc()
    }, [playerOne, playerTwo])

    const masterCalc = () => {
        const [playerOneMatchesTemp, playerTwoMatchesTemp] = calcMatches()
        console.log(playerOneMatchesTemp, playerTwoMatchesTemp)
        calcStats(getHeadToHeadHistory(playerOneMatchesTemp, playerTwoMatchesTemp))

    }

    const getHeadToHeadHistory = (player1Matches, player2Matches) => {
        const matchups = []
        for (let i = 0; i < player1Matches.length; i++) {
            if (player1Matches[i].matchup_id === player2Matches[i].matchup_id) {
                matchups.push([player1Matches[i], player2Matches[i]])
            }
        }
        return matchups
    }

    function calcMatches() {

        console.log(`inside calcMathces...playerOne is ${playerOne}`)
        const playerOneMatchesTemp = matchupWeeks.map(week => {
            return week.filter(team => {
                return team.roster_id === playerOne
            })
        }).map(match => {
            const [matchObj] = match
            return matchObj
        })

        const playerTwoMatchesTemp = matchupWeeks.map(week => {
            return week.filter(team => {
                return team.roster_id === playerTwo
            })
        }).map(match => {
            const [matchObj] = match
            return matchObj
        })
        return ([playerOneMatchesTemp, playerTwoMatchesTemp])
    }

    function calcStats(matchups) {
        console.log(matchups)
        let stats = {

            playerOneWins: 0,
            playerTwoWins: 0,
            playerOneTotalPoints: 0,
            playerTwoTotalPoints: 0
        }

        matchups.forEach(match => {
            stats.playerOneTotalPoints += parseInt(match[0].points.toFixed(2))
            stats.playerTwoTotalPoints += parseInt(match[1].points.toFixed(2))
            if (match[0].points > match[1].points) {
                stats.playerOneWins += 1
            }
            else if (match[1].points > match[0].points) {
                stats.playerTwoWins += 1
            }

        })
        console.log(matchUpStats === stats)
        setMatchUpStats({ ...stats })
    }

    const handleChange = (e, player) => {
        if (player === 1) {
            setPlayerOne(parseInt(e.target.value))
            setPlayerTwoDropdown(teams.filter(team => team.roster_id !== parseInt(e.target.value)))
        }
        else {
            setPlayerTwo(parseInt(e.target.value))
            setPlayerOneDropdown(teams.filter(team => team.roster_id !== parseInt(e.target.value)))
        }
    }

    return (
        <div>

            <h2>Head to Head! (regular season)</h2>
            <div className='matchup-container'>

                <div className='roster-container'>
                    <div>
                        <label htmlFor="sorter">Player 1: </label>
                        <select
                            value={playerOne}
                            data-id="1"
                            id="sorter" onChange={(e) => handleChange(e, 1)}>
                            {playerOneDropdown.map((team) => (
                                <option value={team.roster_id} >
                                    {`${team.display_name}, ${team.roster_id}`}
                                </option>
                            ))}
                        </select >
                        {/* 0 is playerOne's spot in array */}
                        <p>Wins: {matchUpStats.playerOneWins}</p>
                        <p>Total Points: {matchUpStats.playerOneTotalPoints}</p>
                        <p>Biggest Win:</p>
                    </div>
                </div>

                <p>vs</p>

                <div className='roster-container'>
                    <div>
                        <label htmlFor="sorter2">Player 2: </label>
                        <select
                            value={playerTwo}
                            data-id="2"
                            id="sorter2" onChange={(e) => handleChange(e, 2)}>
                            {playerTwoDropdown.map((team) => (
                                <option value={team.roster_id} >
                                    {`${team.display_name}, ${team.roster_id}`}
                                </option>
                            ))}
                        </select >
                        {/* 1 is playerTwos spot in array */}
                        <p>Wins: {matchUpStats.playerTwoWins}</p>
                        <p>Total Points: {matchUpStats.playerTwoTotalPoints}</p>
                        <p>Biggest Win:</p>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default HeadToHead


// when roster team is selected => show that teams stats against the other team that is selected
// stats to show
//   -wins vs opponenent
//    total points scored against opponent
//   biggest blowout score
//   biggest loss score
//    
//    highest scoring player against opponenet?