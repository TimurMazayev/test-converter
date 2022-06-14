import {all} from 'redux-saga/effects'
import {currencyPageSagas} from "./currencySaga";

function* rootSaga() {
    yield all([
        ...currencyPageSagas,
    ])
}

export default rootSaga;
