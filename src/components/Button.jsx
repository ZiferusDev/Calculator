import { useContext } from "react";
import { OutputContext } from "./App";

export default function Button({ className, value }) {
  const { output, addToOutput } = useContext(OutputContext);
  return (
    <button
      className={className}
      onClick={() => {
        if (output.length < 10) addToOutput(value);
      }}
    >
      {value}
    </button>
  );
}
