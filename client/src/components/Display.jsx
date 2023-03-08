import React from "react";

export default function Display({ height, width, result = 0 }) {
    
    
    return (
        <div className="component" style={{height: height, width: width}}>
            <div className="value_keeper">
                {result}
            </div>
        </div>
    )
}