import React from "react";

export default function Equals ({width, height}) {


    return (
        <div className="component" style={{height: height, width: width}}>
            <div className="equalSign_keeper" >
                {"="}
            </div>
        </div>
    )
}