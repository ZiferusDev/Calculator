import Button from "./Button";

export default function Operations () {

    const operators = [
        "/", "x", "-", "+"
    ]

    return (
        <div className="field" style={{height: 56}}>
            {operators.map((operator, index) => 
            <Button
              className = {"operator"}
              key = {index}
              value = {operator}
            />
            )}
        </div>
    )
}