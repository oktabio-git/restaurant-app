function add(nums) {
    return nums.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0 // Valor inicial
    );
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(nums) {
    return nums.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1 // Valor inicial
    );
}

function divide(num1, num2) {
    return num1 / num2;
}

module.exports = { add, substract, multiply, divide };
