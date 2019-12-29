import React, { Fragment } from 'react';

const columns = {
    "position": "Position",
    "team.name": "Team",
    "won": "Won games",
    "lost": "Lost games",
    "draw": "Draw games",
    "points": "Total Points"
}

const FinishedGames = ({ standings, checkTeamInfo }) => {
    console.log(standings)
    return (
        <Fragment>
            <h2>Current Standings</h2>
            <table className="table">
                <thead>
                    <tr>
                        {Object.values(columns).map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {standings.map((standing, i) => {
                        return (
                            <tr key={`st${i}`}>
                                <td>{standing.position}</td>
                                <td
                                    className="team"
                                    onClick={() => checkTeamInfo(standing.team.id)}
                                >{standing.team.name}</td>
                                <td>{standing.won}</td>
                                <td>{standing.lost}</td>
                                <td>{standing.draw}</td>
                                <td>{standing.points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default FinishedGames;