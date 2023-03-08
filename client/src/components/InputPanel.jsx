import React, {useState} from "react";
import InputValue from "./InputValue";
// import ReactDom from "react-dom";

export default function InputPanel (props) {

    const digits = [
        {
            value: 7,
        },
        {
            value: 8,
        },
        {
            value: 9,
        },
        {
            value: 4,
        },
        {
            value: 5,
        },
        {
            value: 6,
        },
        {
            value: 1,
        },
        {
            value: 2,
        },
        {
            value: 3,
        },
        {
            value: 0,
            width: 152
        },
        {
            value: ",",
        }
    ]

    return (
        <div className="component" style={{height: props.height}}>
            {
                digits.map((digit, index) => 
                    <InputValue 
                    key = {index}
                    {...digit}
                    />
                )
            }
        </div>
    )
}