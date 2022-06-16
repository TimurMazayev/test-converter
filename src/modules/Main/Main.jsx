import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form, Field} from 'react-final-form'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {valueActions} from "../../redux/reducers/currencyReducer";

const Main = (...props) => {
    const [firstValue, setFirstValue] = useState('UAH');
    const [secondValue, setSecondValue] = useState('USD');
    const dispatch = useDispatch();
    const {convertedCurrency, isLoading} = useSelector((state) => state.value)
    console.log(firstValue);
    useEffect(() => {

    }, []);

    const onSubmit = () => {
    }

    const changeValue = (event) => {
        setFirstValue(event.target.value)
    }

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <label>First value is {firstValue}</label>
                        <Field name="firstValue" component="input" placeholder="Enter value here" />
                        <Select
                            value={firstValue}
                            onChange={changeValue}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'EUR'}>EUR</MenuItem>
                            <MenuItem value={'UAH'}>UAH</MenuItem>
                        </Select>

                        <label>Second value is {secondValue}</label>
                        <Field name="firstValue" component="input" placeholder="Enter value here" />
                        <Select
                            value={secondValue}
                            onChange={changeValue}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'EUR'}>EUR</MenuItem>
                            <MenuItem value={'UAH'}>UAH</MenuItem>
                        </Select>
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        </div>
    );
};

export default Main;
