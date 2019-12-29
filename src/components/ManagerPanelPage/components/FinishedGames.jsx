import React, { Fragment } from 'react';
import { convertUtcDate } from '../../../utils/dataConverter';

const columns = {
    "utcDate": "Game Date",
    "homeTeam.name": "Home Team",
    "awayTeam.name": "Away Team",
    "score.fullTime": "Score"
}

const FinishedGames = ({ finishedGames, checkTeamInfo }) => {
    console.log(finishedGames)
    return (
        <Fragment>
            <h2>Finished Games</h2>
            <table className="table">
                <thead>
                    <tr>
                        {Object.values(columns).map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {finishedGames.map(game => {
                        return (
                            <tr key={game.id}>
                                <td>{convertUtcDate(game.utcDate)}</td>
                                <td
                                    className="team"
                                    onClick={() => checkTeamInfo(game.homeTeam.id)}
                                >{game.homeTeam.name}</td>
                                <td
                                    className="team"
                                    onClick={() => checkTeamInfo(game.awayTeam.id)}
                                >{game.awayTeam.name}</td>
                                <td>{`${game.score.fullTime.homeTeam}:${game.score.fullTime.awayTeam}`}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default FinishedGames;