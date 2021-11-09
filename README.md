  get Basic League Info
    fetch('https://api.sleeper.app/v1/league/736382027170983936')
    .then(resp => (resp.json())
      .then(data => console.log(data)))

  get Users In League - returns USER ID
    fetch('https://api.sleeper.app/v1/league/736382027170983936/users')
    .then(resp => (resp.json())
      .then(data => console.log(data)))

  get Rosters In League - lots of info here - need to identify the user with ID
    fetch('https://api.sleeper.app/v1/league/736382027170983936/rosters')
    .then(resp => (resp.json())
      .then(data => console.log(data)))

  get info on User - 
    fetch('https://api.sleeper.app/v1/user/723943147419316224')
    .then(resp => (resp.json())
      .then(data => console.log(data)))

  get player info
    fetch('https://api.sleeper.app/v1/players/nfl')
    .then(resp => (resp.json())
      .then(data => console.log(data)))

  get matchups, rosterID, matchup ID, players, starters, starter points(only completed games), 
    fetch('https://api.sleeper.app/v1/league/736382027170983936/matchups/7')
    .then(resp => (resp.json())
      .then(data => console.log(data)))