import React, { useContext } from 'react'
import { OutputContext } from "../App";

export default function ClearPanel() {

  const { clearOutput, popOutput } = useContext(OutputContext);

  return (
    <div className="field" style={{height: 60}}><button className="clearBtn" onClick={() => {clearOutput()} }>Clear all</button> 
        <button className="deleteLastBtn" onClick={() =>{ popOutput() } }> 
        &lt;=
        </button>
    </div>
  )
}
