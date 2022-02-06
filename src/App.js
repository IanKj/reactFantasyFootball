import React, { useState, useEffect } from 'react'
import Teams from './components/Teams'
import Nav from './components/Nav'
import {
  Routes,
  Route
} from "react-router-dom";

import About from './components/About'
import Matchups from './components/Matchups'
import HeadToHead from './components/HeadToHead'
import Playoffs from './components/Playoffs'
import football from './football.webp'
import MaxPointTotals from './components/MaxPointTotals';


function App() {
  const [teams, setTeams] = useState([])
  const [nflPlayers, setNflPlayers] = useState({})
  const [avgFpts, setAvgFpts] = useState(0)
  const [avgFptsAgainst, setAvgFptsAgainst] = useState(0)
  const [matchupWeeks, setMatchupWeeks] = useState([])
  console.log(matchupWeeks)

  async function getRosterInfo() {
    //pull all team info - players, roster_id, settings(points scored, etc....), starters
    const teams = await fetch('https://api.sleeper.app/v1/league/735291736863129600/rosters').then(resp => resp.json())
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

  async function getMatchupHistory() {
    //this only works during active season => change week manually to 18 during offseason
    const { week } = await fetch("https://api.sleeper.app/v1/state/nfl").then(resp => resp.json())
    console.log('current week of the NFL is week:', week)
    // const getAllWeekMatchups = async () => {
    //   return Promise.all()
    // }
    // i is the week....cannot be 0
    for (let i = 1; i < 15; i++) {
      const weekMatchups = await fetch(`https://api.sleeper.app/v1/league/735291736863129600/matchups/${i}`).then(resp => resp.json())
      setMatchupWeeks(prevMatchUps => [...prevMatchUps, weekMatchups])
    }

  }

  useEffect(() => {
    getRosterInfo()
    getNflPlayers()
    getMatchupHistory()
  }, [])

  return (

    <div className="app-container">
      <Nav />
      <h1>AK Fantasy Football (only dynasty stats for now...)</h1>
      <img alt="football" src={football} />
      <Routes>
        <Route exact path='/reactFantasyFootball' element={<Teams
          teams={teams}
          nflPlayers={nflPlayers}
          avgFpts={avgFpts}
          avgFptsAgainst={avgFptsAgainst}
        />} />

        <Route path='/matchups' element={<Matchups
          teams={teams}
          nflPlayers={nflPlayers}
          avgFpts={avgFpts}
          avgFptsAgainst={avgFptsAgainst}
          matchupWeeks={matchupWeeks}
        />} />

        <Route path='/headtohead' element={<HeadToHead
          teams={teams}
          nflPlayers={nflPlayers}
          matchupWeeks={matchupWeeks}
        />} />

        <Route path='/about' element={<About />} />

        <Route path='/playoffs' element={<Playoffs
          teams={teams}
          nflPlayers={nflPlayers}
          matchupWeeks={matchupWeeks}
        />} />

        {/* <Route path='/maxpointstotals' element={<MaxPointTotals
          teams={teams}
          nflPlayers={nflPlayers}
          matchupWeeks={matchupWeeks}
        />} /> */}
      </Routes>

    </div>
  );
}

export default App;


