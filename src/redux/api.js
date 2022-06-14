import wretch from 'wretch';
import {apiConfig} from "../utils/baseUrl";


const getTodayCurrency = (payload) => wretch(`${apiConfig.baseUrl}/latest`)

export const valueApi = {
    getTodayCurrency
}
