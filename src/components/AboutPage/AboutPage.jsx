import React, { Fragment, useState, useEffect } from 'react';
import Champions from './Champions';
import { getBasicInfo } from '../../utils/fetches';
import { convertSimpleDate } from '../../utils/dataConverter';

const AboutPage = () => {

    const [basicInfo, setBasicInfo] = useState({});
    //const [champsShown, showChampions] = useState(false);
    const columns = {
        "name": "Winner",
        "startDate" : "Season start date",
        "endDate" : "Season finish date",
    }
    // const showChampionsTable = () => {
    //     showChampions(!champsShown);
    //     console.log(champsShown);
    // }

    useEffect(() => {
        (async function () {
            const result = await getBasicInfo();
            console.log(result);
            setBasicInfo({
                ...result
            })
        })()
    }, []);

    return (
        <div className="jumbotron">
            <h1>About</h1>
            {/* <p>Here you can find more information about this application and Bundesliga:</p> */}
            {Object.entries(basicInfo).length !== 0 ?
                <Fragment>
                    <div className="basicInfo">
                        <div><b>Name of League:</b> {basicInfo.name}</div>
                        <div><b>Country:</b> {basicInfo.area.name}</div>
                        <div><b>Current Season Start:</b> {convertSimpleDate(basicInfo.currentSeason.startDate)}</div>
                        <div><b>Current Season End:</b> {convertSimpleDate(basicInfo.currentSeason.endDate)}</div>
                    </div>
                </Fragment> : <div>Please wait for data...</div>}
            {/* <button
                className="btn btn-primary btn-lg btn-margin"
                onClick={() => showChampionsTable()}
            >
                Show previous champions:
            </button> */}
            <h2>Seasonal champions</h2>
            {Object.entries(basicInfo).length !== 0 ? 
            <Champions 
                columns={columns} 
                data={basicInfo.seasons} 
            /> 
            : 
            <div>Please wait for data...</div>}

        </div>
    )

}

export default AboutPage;