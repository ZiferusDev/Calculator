const operators_re = /x|\+|-|\//;

function isStrIncorrect(str) {
    const doubledOperators_re = /-\+|-\x|-\/|(x|\+|\/|-){2}/g;
    return doubledOperators_re.test(str) 
}

function clearEmptyCells(array) {
    return array.filter((val) => val !== "");
}

function parseString(str) {
    let str_divided = str.replace(/\D/g, function(match) {
        if (match === "-") return " " + match
        if (match === ",") return "."
        return " " + match + " "
    })
    return clearEmptyCells(str_divided.split(" "))
}

function calculate(users_input) {

    if (isStrIncorrect(users_input)) return "Input error";

    users_input = parseString(users_input);
    for(let i = 0; i < users_input.length; i++) {
        switch(users_input[i]) {
            case "/":
                if (users_input[i+1] === "0") return "Ошибка! /0"
                users_input[i] = users_input[i-1] / users_input[i+1]
                users_input[i-1] = users_input[i+1] = ""
                users_input = clearEmptyCells(users_input);
                i -= 2;
                break;
            case "x":
                users_input[i] = users_input[i-1] * users_input[i+1]
                users_input[i-1] = users_input[i+1] = ""
                users_input = clearEmptyCells(users_input);
                i -= 2;
                break;
            case "+":
                users_input[i] = 0;
                break;
        }
    }
    
    let result = users_input.reduce((a, b) => +a + +b).toFixed(2);
    return isNaN(result) ? "Ошибка" : result;

}

export default calculate;
