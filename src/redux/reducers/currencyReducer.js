import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todayCurrency: {},
    baseCurrency: '',
    convertedCurrency: 0,
    isLoading: true,
};
const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        setTodayCurrency(state, action) {
            state.baseCurrency = action.payload.base;
            state.todayCurrency = action.payload.rates;
        },
        setConvertedCurrency(state, action) {
            state.convertedCurrency = action.payload?.result;
        },
    }
});

export const valueActions = valueSlice.actions;
export const valueReducer = valueSlice.reducer;
