import Button from "./Button";

export default function InputPanel () {

    const digits = [7,8,9,4,5,6,1,2,3,0,","]  // А нужно ли это?

    return (
        <div className="inputPanel">
            {
                digits.map((digit, index) => {
                if(digit === 0) {
                    return <Button className="digit_0"
                        key = {index}
                        value = {digit}
                    />
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