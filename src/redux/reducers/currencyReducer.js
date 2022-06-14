import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstValue: 0,
    secondValue: 0,
    isLoading: true,
};

const valueSlice = createSlice({
    name: 'value',
    initialState,
});



export default valueSlice.reducer;
