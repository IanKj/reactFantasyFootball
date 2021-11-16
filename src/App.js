import React, { useState, useEffect } from 'react'
import Teams from './components/Teams'
import Nav from './components/Nav'
import {
  Routes,
  Route
} from "react-router-dom";

import About from './components/About'
import Matchups from './components/Matchups'

function App() {
  const [teams, setTeams] = useState([])
  const [nflPlayers, setNflPlayers] = useState({})
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

  return (

    <div className="app-container">
      <Nav />
      <h1>AK Redraft</h1>
      <Routes>
        <Route exact path='/' element={<Teams
          teams={teams}
          nflPlayers={nflPlayers}
          avgFpts={avgFpts}
          avgFptsAgainst={avgFptsAgainst} />} />
        <Route path='/about' element={<About />} />
        <Route path='/matchups' element={<Matchups
          teams={teams}
          nflPlayers={nflPlayers}
          avgFpts={avgFpts}
          avgFptsAgainst={avgFptsAgainst} />} />
      </Routes>


    </div>
  );
}

export default App;


