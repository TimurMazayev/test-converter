import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodayCurrencyAction } from "../../redux/saga/sagaActions";
import './styles.css'

const Header = () => {
    const todayCurrency = useSelector((state) => state.value.todayCurrency)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodayCurrencyAction())
    }, []);

    return (
        <div className='header_container'>
            <div className='header_content'>
                <div className='header_currency_wrapper'>
                    <div>
                        Today`s currency for UAH is:
                    </div>
                    <div className='header_currency'>
                        <div className='currency_values'>USD: {todayCurrency.USD}</div>
                        <div className='currency_values'>EUR: {todayCurrency.EUR}</div>
                    </div>
                </div>
                <h3>Currency Converter</h3>
            </div>
        </div>
    );
};

export default Header;
