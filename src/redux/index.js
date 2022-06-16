import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
