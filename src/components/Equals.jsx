import { useContext } from "react";
import { OutputContext } from "./App";
import calculate from "../logic";


export default function Equals () {

    const { output, addToOutput, clearOutput } = useContext(OutputContext);

    return (
        <div className="equals"> 
            <button onClick={() => {
                clearOutput();
                addToOutput(calculate(output));
            }}>
                =
            </button>
        </div>
    )
}