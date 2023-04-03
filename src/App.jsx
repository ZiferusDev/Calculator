import React, {useState, createContext} from "react";
import InputPanel from "./components/InputPanel";
import Operations from "./components/Operations";
import Display from "./components/Display";
import Equals from "./components/Equals";
import ClearPanel from "./components/ClearPanel";

function App() {
    const [output, setOutput] = useState("");

    const addToOutput = (value) => {
      setOutput(output => output + value);
    }
    const popOutput = () => {
      setOutput(output => output.replace(/.$/, ""));
    }
    
    const clearOutput = () => {setOutput("")}
  
    return (
      <OutputContext.Provider value={{ output, addToOutput, clearOutput, popOutput }}>
      {console.log("Вот твой вывод: " + output)}
        <div className="App">
          <Display/>
          {/* Вынести в отдельный компонент */}
          <ClearPanel />
          <Operations />
          <InputPanel height = {224} />
          <Equals />
          
        </div>
      </OutputContext.Provider>
    );
}

export const OutputContext = createContext();
export default App;