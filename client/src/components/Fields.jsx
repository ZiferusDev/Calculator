import React, { createContext, useState } from "react";
import InputPanel from "./InputPanel";
import Operations from "./Operations";
import Display from "./Display";
import Equals from "./Equals";

function Fields() {
  
  const [output, setOutput] = useState("0");

  const addToOutput = (value) => {
    if (output == 0) setOutput("")
    setOutput(output => output + value);
  }
  
  const clearOutput = () => {setOutput("")}

  return (
    <OutputContext.Provider value={{ output, addToOutput, clearOutput }}>
    {console.log("Вот твой вывод: " + output)}
      <div className="App">
        <Display/>
        <button className="clearBtn" onClick={() => {clearOutput(); addToOutput("0")} }>Clear</button>
        <Operations />
        <InputPanel height = {224} />
        <Equals />
        
      </div>
    </OutputContext.Provider>
  );
}

export const OutputContext = createContext();
export default Fields;
