import React, {useState, createContext} from "react";
import InputPanel from "./components/InputPanel";
import Operations from "./components/Operations";
import Display from "./components/Display";
import Equals from "./components/Equals";

function App() {
    const [output, setOutput] = useState("");

    const addToOutput = (value) => {
      setOutput(output => output + value);
    }
    
    const clearOutput = () => {setOutput("")}
  
    return (
      <OutputContext.Provider value={{ output, addToOutput, clearOutput }}>
      {console.log("Вот твой вывод: " + output)}
        <div className="App">
          <Display/>
          <button className="clearBtn" onClick={() => {clearOutput()} }>Clear</button>
          <Operations />
          <InputPanel height = {224} />
          <Equals />
          
        </div>
      </OutputContext.Provider>
    );
}

export const OutputContext = createContext();
export default App;