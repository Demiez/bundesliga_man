import React from 'react';
import { convertSimpleDate } from '../../../utils/dataConverter';

const ChampionsTable = ({ columns, data }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    {Object.values(columns).map((columnTitle, i) => <th key={i}>{columnTitle}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.winner !== null ? item.winner.name : "Unknown"}</td>
                        <td>{convertSimpleDate(item.startDate)}</td>
                        <td>{convertSimpleDate(item.endDate)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ChampionsTable;