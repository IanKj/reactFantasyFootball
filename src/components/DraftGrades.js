import React from 'react'
import { draftGrades } from '../constants/constants'

export default ({ teams }) => {
    console.log(teams)
    return (
        <div>
            <p>These are dynasty draft grades, created by Matt in google sheets and imported here.</p>
            <div className="draft-grades-container">
                {teams.map(person => {
                    return <img src={require(`../constants/draftGradesPhotos/${person.roster_id}.png`).default}></img>
                })}
            </div>
        </div>

    )
}
// }require('../constants/draftGradesPhotos/GerryDraftGrade.png'


// fetch("https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leaguedefaults/3?view=kona_player_info", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "en-US,en;q=0.9",
//     "if-none-match": "W/\"07401f153bc1bfe1e92e7523ffcb10fdd\"",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Linux\"",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "none",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

// var filters = {
//     "players": {
//         "limit": 1500,
//         "sortDraftRanks": {
//             "sortPriority": 100,
//             "sortAsc": true,
//             "value": "STANDARD"
//         }
//     }
// };

// var options = {
//     "headers": {
//         "x-fantasy-filter": JSON.stringify(filters)
//     }
// };

// var playersTxt = UrlFetchApp.fetch(url, options).getContentText();