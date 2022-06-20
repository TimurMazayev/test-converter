import {call, takeLatest, put} from 'redux-saga/effects';
import {valueApi} from "../api";
import {valueActions} from "../reducers/currencyReducer";
import {actionTypes} from "./sagaActions";

function* getTodayCurrency() {
    const todayCurrencyResponse = yield call(valueApi.getTodayCurrencyApi);
    yield put(valueActions.setTodayCurrency(todayCurrencyResponse));
};

function* getConvertedCurrency(data) {
    const convertedCurrencyResponse = yield call(valueApi.getConvertedCurrencyApi, data.currencies)
    yield put(valueActions.setConvertedCurrency(convertedCurrencyResponse));
}

export function* currencyPageSagas() {
    yield takeLatest(actionTypes.GET_TODAY_CURRENCY, getTodayCurrency);
    yield takeLatest(actionTypes.GET_CONVERTED_CURRENCY, getConvertedCurrency)
}

