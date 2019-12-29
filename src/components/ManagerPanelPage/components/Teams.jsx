import React, { Fragment } from 'react';

const columns = {
    "name": "Team Name",
    "venue": "Home Stadion",
    "clubColors": "Club Colors",
    "founded": "Year of Foundation"
}

const Teams = ({ teams, checkTeamInfo }) => {

    return (
        <Fragment>
            <h2>Playing teams</h2>
            <table className="table">
                <thead>
                    <tr>
                        {Object.values(columns).map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => {
                        return (
                            <tr key={team.id}>
                                <td
                                    className="team"
                                    onClick={() => checkTeamInfo(team.id)}
                                >{team.name}</td>
                                <td>{team.venue}</td>
                                <td>{team.clubColors}</td>
                                <td>{team.founded}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Teams;