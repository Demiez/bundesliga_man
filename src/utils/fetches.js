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

export const getBasicInfo = (url, obj) => getMethod(URIs.GET_BASIC_INFO, requestObject);