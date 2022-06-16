import {combineReducers} from "@reduxjs/toolkit";
import {valueReducer} from "./currencyReducer";


export const rootReducer = combineReducers({
    value: valueReducer,
})
