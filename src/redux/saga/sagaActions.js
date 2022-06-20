export const actionTypes = {
    GET_TODAY_CURRENCY: 'GET_TODAY_CURRENCY',
    GET_CONVERTED_CURRENCY: 'GET_CONVERTED_CURRENCY'
}

export const getTodayCurrencyAction = () => ({
    type: actionTypes.GET_TODAY_CURRENCY
})

export const getConvertedCurrency = (currencies) => ({
    type: actionTypes.GET_CONVERTED_CURRENCY,
    currencies
})