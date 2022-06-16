import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todayCurrency: {},
    convertedCurrency: 0,
    isLoading: true,
};
const valueSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        setTodayCurrency(state, action) {
            state.todayCurrency = action.payload;
        },
        setConvertedCurrency(state, action) {
            state.convertedCurrency = action.payload;
        },
    }
});

export const valueActions = valueSlice.actions;
export const valueReducer = valueSlice.reducer;
