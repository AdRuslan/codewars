function validParentheses(parens) {
    if (parens.length % 2 !== 0) return false

    let result = true
    let counter = 0

    parens.split('').forEach(item => {
        if (item === '(') counter++
        else if (item === ')' && counter > 0) counter--
        else if (item === ')' && counter < 1) result = false
    })

    return result && counter === 0
}

const solution = validParentheses("(") //false
console.log(solution);
