import React, { useContext } from "react";
import { OutputContext } from "../App";

export default function Display() {
    
        const { output, addToOutput } = useContext(OutputContext);

    return (
        <div className="field" style={{height: 68, width: 240}}>
            <div className="value_keeper">
                {output}
            </div>
        </div>
    )
}