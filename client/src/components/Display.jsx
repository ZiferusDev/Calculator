import React, { useContext } from "react";
import { OutputContext } from "./Fields";

export default function Display() {
    
        const { output, addToOutput } = useContext(OutputContext);
        console.log("Я дисплей и я получил: " + output);

    return (
        <div className="field" style={{height: 68, width: 240}}>
            <div className="value_keeper">
                {output}
            </div>
        </div>
    )
}