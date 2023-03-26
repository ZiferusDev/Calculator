import React, { useContext } from "react";
import { OutputContext } from "./Fields";


export default function Button (props) {

    const { _, addToOutput } = useContext(OutputContext);

    return (
        <button className={props.className} onClick={() => {addToOutput(props.value)} }>
            {props.value}
        </button>
    )
}