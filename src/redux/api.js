import wretch from 'wretch';
import { apiConfig } from "../utils/baseUrl";

const getTodayCurrencyApi = () => wretch(`${apiConfig.baseUrl}${apiConfig.latest}?base=UAH`)
    .get()
    .json();

const getConvertedCurrencyApi = (data) => wretch(`${apiConfig.baseUrl}${apiConfig.convert}?from=${data.from}&to=${data.to}`)
    .get()
    .json()

export const valueApi = {
    getTodayCurrencyApi,
    getConvertedCurrencyApi,
}
