import React, { useContext } from "react";
import { OutputContext } from "../App";
import calculate from "../logic";


export default function Equals () {

    const { output, addToOutput, clearOutput } = useContext(OutputContext);
    console.log("Я equals и я получил: " + output);

    return (
        <div className="equals"> 
        {/* Переделать, когда почитаю про БЭМ */}
            <button onClick={() => {
                clearOutput();
                addToOutput(calculate(output));
            }}>
                =
            </button>
        </div>
    )
}