import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function MaxPointTotals(props) {
    const { matchupWeeks, teams } = props
    const week15 = matchupWeeks[14]
    const week16 = matchupWeeks[15]

    function calcTotals(week) {
        const totalPoints = week.map(team => {
            console.log(team)
            const points = Object.values(team.players_points).reduce((a, b) => a + b)
            const teamName = team.display_name
            return { user: teamName, totalPoints: points }
        })
        return totalPoints.sort((a, b) => a.totalPoints - b.totalPoints)
    }

    function addTotals(...weeks) {
        const addedPoints = weeks[0].map(week => {
            console.log(week)
            const matchedPlayer = weeks[1].filter(player => player.user === week.user)
            console.log(matchedPlayer)
            const points = week.totalPoints + matchedPlayer[0].totalPoints
            return { user: week.user, cumalitivePoints: points.toFixed(2) }
        })
        return addedPoints.sort((a, b) => a.cumalitivePoints - b.cumalitivePoints)
    }
    useEffect(() => {
        console.log(teams)
        console.log(matchupWeeks)
        const week15Totals = calcTotals(week15)
        const week16Totals = calcTotals(week16)
        console.log(week15Totals)
        console.log(week16Totals)
        const cumalitiveTotalPoints = addTotals(week15Totals, week16Totals)
        console.table(cumalitiveTotalPoints)


    }, [])

    return (
        <div>
            <p>Max point totals!</p>
        </div>
    )
}

//7611
//7612
