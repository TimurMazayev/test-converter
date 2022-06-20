import React from "react";
import { Input } from "@mui/material";
import './styles.css'

const ValueField = (props) => {
    const {
        currencyTypes,
        selectedValueType,
        onChangeValueType,
        amounts,
        onChangeAmounts,
    } = props;

    return (
        <div>
            <Input className="value_field_input" type="number" value={amounts} onChange={onChangeAmounts} />
            <select className="value_field_select" value={selectedValueType} onChange={onChangeValueType}>
                {currencyTypes.map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}

export default ValueField;