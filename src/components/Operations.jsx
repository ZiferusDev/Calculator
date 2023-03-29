import React from "react";
import Button from "./Button";

export default function Operations (props) {

    const operators = [
        "/", "x", "-", "+"
    ]

    return (
        <div className="field" style={{height: 56}}>
            {operators.map((operator, index) => 
            <Button
              className = {"operator"}
              key = {index}
              value = {operator}
            />
            )}
        </div>
    )
}