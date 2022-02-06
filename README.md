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


NavBar 
  About League
  League selector
    2021 redraft
    2021 dynasty
  Trades
  Transactions
  Individual Stats    
  

ideas
  End of year draft grades
    where each player was drafted vs where they ended up
    update weekly?
  Average Finish in the past
  Tendency to roster certain players
  Wins and losses vs opponent
  Personal best scores
  Personal worst scores
  Average scores (compared to league average)
  Scores above median
  scores below median

  Most players injured
  click on player for more info
    who has owned him/activity history
  calculate average rank of roster
  Playoffs
  Leaderboards page
    total points scored
    total wins
    total losses
    total roster changes
    

  
TO DO

determine empty bench spots
  => display as empty

troubleshoot matchups for dynasty
matchups playoffs
head to head
playoffs
max points



head to head total wins versus opponent

create an array for headToHead matchups to be placed

map through every single weekr
  grab playerOne matchup, compare it to the rest of the results
    is the matchup_ID the same?
      if it is, check if the opponents roster_id === playerTwo
   
