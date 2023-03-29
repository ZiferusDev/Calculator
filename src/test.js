// const operators_re = new RegExp(/x|-|\+\|\//);
// const incorrectStr_re = /-\+|-\*|-\/|(x|\+|\/){2}/g

// operators_re.test("...");
// console.log(operators_re.exec("99-/x99"));
// console.log("99-+-99".match(operators_re));

function isStrIncorrect(str) {
    const doubledOperators_re = /-\+|-\*|-\/|(x|\+|\/){2}/g;
    return doubledOperators_re.test(str)
}

console.log(isStrIncorrect("-24/12x10-10x15+22x-10+1000"))