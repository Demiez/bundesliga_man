import React, { Fragment } from 'react'
import { convertSimpleDate } from '../../../utils/dataConverter';

const BasicInfo = ({ basicInfo }) => (
    <Fragment>
        <div className="basicInfo">
            <div><b>Name of League:</b> {basicInfo.name}</div>
            <div><b>Country:</b> {basicInfo.area.name}</div>
            <div><b>Current Season Start:</b> {convertSimpleDate(basicInfo.currentSeason.startDate)}</div>
            <div><b>Current Season End:</b> {convertSimpleDate(basicInfo.currentSeason.endDate)}</div>
        </div>
    </Fragment>
)

export default BasicInfo;