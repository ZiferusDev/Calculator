import React, {useState, useContext} from "react";
import Button from "./Button";
import { OutputContext } from "../App";

export default function InputPanel (props) {

    const digits = [7,8,9,4,5,6,1,2,3,0,","]  // А нужно ли это?

    const { output } = useContext(OutputContext);

    return (
        <div className="inputPanel">
            {
                digits.map((digit, index) => {
                if(digit === 0) {
                    return <Button className="digit_0"
                        key = {index}
                        value = {digit}
                    /> // Переделать, почитав про БЭМ
                }
                else {
                    return <Button className="digit"
                    key = {index}
                    value = {digit}
                    />
                }
            })
            }
        </div>
    )
}