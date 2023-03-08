import React from "react";
import InputValue from "./InputValue";

export default function Operations (props) {

    const operators = [
        "/", "x", "-", "+"
    ]

    const size_width = 52;

    return (
        <div className="component" style={{height: props.height}}>
            {operators.map((operator, index) => 
            <InputValue
              key = {index}
              width = {size_width}
              value = {operator}
            />
            )}
        </div>
    )
}