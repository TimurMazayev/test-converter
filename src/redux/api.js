import wretch from 'wretch';
import {apiConfig} from "../utils/baseUrl";

const getTodayCurrencyApi = () => wretch(`${apiConfig.baseUrl}${apiConfig.latest}?base=UAH`).get().json();

export const valueApi = {
    getTodayCurrencyApi,
}
