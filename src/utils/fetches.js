import * as URIs from './constants';
import {requestObject} from './config';

const getMethod = async (url, obj) => {
    const result = await fetch(url, obj).then(
        response => response.json()
    )
    .catch (
        error => console.error('Error:', error)
    )
    return result;
}

export const getBasicInfo = () => getMethod(URIs.GET_BASIC_INFO, requestObject);
export const getPlayingTeams = () => getMethod(URIs.GET_PLAYING_TEAMS_INFO, requestObject);
export const getTeamInfo = (teamId) => getMethod(`${URIs.GET_TEAM_INFO}${teamId}`, requestObject);
export const getFinishedGames = () => getMethod(URIs.GET_FINISHED_GAMES, requestObject);
export const getCurrentStandings = () => getMethod(URIs.GET_CURRENT_STANDINGS, requestObject);