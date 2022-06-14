import {call, takeEvery} from 'redux-saga/effects';
import {valueApi} from "../api";

function* getCurrency(payload) {
    yield call(valueApi.getTodayCurrency, payload);
}

export const currencyPageSagas = [
    takeEvery(getCurrency),
]
