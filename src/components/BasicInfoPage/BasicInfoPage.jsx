import React, { useState, useEffect } from 'react';
import BasicInfo from './components/BasicInfo';
import ChampionsTable from './components/ChampionsTable';
import { getBasicInfo } from '../../utils/fetches';

const BasicInfoPage = () => {

    const [basicInfo, setBasicInfo] = useState({});
    const columns = {
        "name": "Winner",
        "startDate": "Season start date",
        "endDate": "Season finish date",
    }

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
            <h1>Basic information about league</h1>
            {Object.entries(basicInfo).length !== 0 ?
                <BasicInfo basicInfo={basicInfo} />
                :
                <div>Please wait for data...</div>}
            <h2>Seasonal champions</h2>
            {Object.entries(basicInfo).length !== 0 ?
                <ChampionsTable columns={columns} data={basicInfo.seasons} />
                :
                <div>Please wait for data...</div>}
        </div>
    )

}

export default BasicInfoPage;