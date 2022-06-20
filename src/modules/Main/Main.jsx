import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValueField from "../../components/valueField";
import {
  getConvertedCurrency,
  getTodayCurrencyAction,
} from "../../redux/saga/sagaActions";
import "./styles.css";

const Main = () => {

  const dispatch = useDispatch();
  const { todayCurrency, baseCurrency, convertedCurrency } = useSelector(
    (state) => state.value
  );
  
  const [firstCurrencyType, setFirstCurrencyType] = useState(
    baseCurrency ?? ""
  );
  const [secondCurrencyType, setSecondCurrencyType] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);
  const [rate, setRate] = useState();
  const currencyTypes = ["UAH", "USD", "EUR"];

  useEffect(() => {
    dispatch(getTodayCurrencyAction());
  }, []);

  useEffect(() => {
    setFirstCurrencyType(baseCurrency);
    setSecondCurrencyType(currencyTypes[1]);
    setRate(todayCurrency[currencyTypes[1]]);
  }, [todayCurrency, baseCurrency]);

  useEffect(() => {
    if (firstCurrencyType !== undefined && secondCurrencyType !== undefined) {
      dispatch(
        getConvertedCurrency({
          from: firstCurrencyType,
          to: secondCurrencyType,
        })
      );
      setRate(convertedCurrency);
    }
  }, [firstCurrencyType, secondCurrencyType, convertedCurrency]);

  let toAmount, fromAmount;

  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * rate || 0;
  } else {
    toAmount = amount;
    fromAmount = amount / rate || 0;
  }

  const changeFromAmounts = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(true);
  };

  const changeToAmounts = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(false);
  };

  return (
    <div className="main_wrapper">
      <div className="main_container">
        <div>
          <ValueField
            currencyTypes={currencyTypes}
            selectedValueType={firstCurrencyType}
            onChangeValueType={e => setFirstCurrencyType(e.target.value)}
            onChangeAmounts={changeFromAmounts}
            amounts={fromAmount}
          />
        </div>
        <div className="main_arrows">↑↓</div>
        <div>
          <ValueField
            currencyTypes={currencyTypes}
            selectedValueType={secondCurrencyType}
            onChangeValueType={e => setSecondCurrencyType(e.target.value)}
            onChangeAmounts={changeToAmounts}
            amounts={toAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
