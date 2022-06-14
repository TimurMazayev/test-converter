import {configureStore} from "@reduxjs/toolkit";
import valueReducer from './currencyReducer'

export const store = configureStore({
    reducer: {
        value: valueReducer,
    }
})
