import React from "react";

export default function InputValue ({ value, width = 72, height = 48 }) {
    return (
        <div className="InputValue" style={{width: width, height: height}}>
            {value}
        </div>
    )
}