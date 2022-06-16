import {call, takeLatest, put} from 'redux-saga/effects';
import {valueApi} from "../api";
import {valueActions} from "../reducers/currencyReducer";
import {actionTypes, getTodayCurrencyAction} from "./sagaActions";

function* getTodayCurrency() {
    const todayCurrencyResponse = yield call(valueApi.getTodayCurrencyApi);
    yield put(valueActions.setTodayCurrency(todayCurrencyResponse.rates));
}

export function* currencyPageSagas() {
    yield takeLatest(actionTypes.GET_TODAY_CURRENCY, getTodayCurrency);
}

