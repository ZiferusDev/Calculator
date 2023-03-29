import React, { useContext } from "react";
import { OutputContext } from "../App";


export default function Button (props) {

    const { output, addToOutput } = useContext(OutputContext);

    return (
        <button className={props.className} onClick={() => {
            if(output.length < 10) {
                if (output.length === 0 && props.className === "operator") addToOutput("0" + props.value)
                else addToOutput(props.value)
            }
        } }>
            {props.value}
        </button>
    )
}