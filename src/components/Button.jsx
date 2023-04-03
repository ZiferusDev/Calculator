import React, { useContext } from "react";
import { OutputContext } from "../App";


export default function Button (props) {

    const { output, addToOutput } = useContext(OutputContext);

    return (
        <button className={props.className} onClick={() => {
            if(output.length < 10) addToOutput(props.value)
        } }>
            {props.value}
        </button>
    )
}