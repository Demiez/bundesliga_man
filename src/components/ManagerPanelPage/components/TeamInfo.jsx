import React, { Fragment } from 'react';

const TeamInfo = ({team}) => {
    const squad = team.squad || [];
    return (
        <Fragment>
            <h2>Team info</h2>
            <div><b>Team name: </b>{team.name}</div>
            <div><b>Team address: </b>{team.address}</div>
            <div><b>Players: </b></div>
            <div className="squad">
                {squad.map(player => <div>{`${player.name} : ${player.position ? player.position : 'unknown'}`}</div>)}
            </div>
        </Fragment>
        
    )
}

export default TeamInfo;