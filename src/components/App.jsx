import {useState, createContext} from "react";
import InputPanel from "./InputPanel";
import Operations from "./Operations";
import Display from "./Display";
import Equals from "./Equals";
import ClearPanel from "./ClearPanel";
import InfoPanel from "./InfoPanel";

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
        <div className="App">
          <InfoPanel />
          <Display/>
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