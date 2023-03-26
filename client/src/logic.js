// Я знаю, что это реализовано ужасным способом.

// Допилить запятые

function parseString(someStr) {
    let someStr_divided = someStr.replace(/\D/g, function(match) {
        return " " + match + " "
    })
    return someStr_divided.split(" ");
}

function calculate(users_input) {
    users_input = parseString(users_input);

    for(let i = 0; i < users_input.length; i++) {
        // console.log(users_input, "\n", users_input[i]);
        switch(users_input[i]) {
            case "/":
                if ((users_input[i] === "/") & (users_input[i+1] === "0")) return "Ошибка! Деление на ноль."
                users_input[i] = users_input[i-1] / users_input[i+1]
                users_input[i-1] = users_input[i+1] = ""
                users_input = users_input.filter((val) => val !== "");
                i--;
                break;
            case "x":
                users_input[i] = users_input[i-1] * users_input[i+1]
                users_input[i-1] = users_input[i+1] = ""
                users_input = users_input.filter((val) => val !== "");
                i--;
                break;
        }
    }
    
    users_input = users_input.filter((val) => val !== "");
    
    let result = Number(users_input[0]);

    for(let i = 0; i < users_input.length; i++) {
        switch(users_input[i]) {
            case "+":
                result += Number(users_input[i+1])
                break;
            case "-":
                result -= Number(users_input[i+1])
                break;
        }
    }

    return result
}

export default calculate;
