import React from "react";
import InputPanel from "./InputPanel";
import Operations from "./Operations";
import Display from "./Display";
import Equals from "./Equals";

function Components() {
  return (
    <div className="App">
      <Display
        width = {240}
        height = {60}
        />
      <Operations height = {56} />
      <InputPanel height = {224} />
      <Equals 
        width = {240}
        height = {72}
      />
    </div>
  );
}

export default Components;
