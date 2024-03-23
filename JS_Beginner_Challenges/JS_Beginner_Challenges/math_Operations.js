let num1 = parseFloat(prompt("Enter the first number:"));

let operation = prompt("Enter the operation (+, -, *, /):");

let num2 = parseFloat(prompt("Enter the second number:"));

let result;
switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            result = "Error! Division by zero.";
        } else {
            result = num1 / num2;
        }
        break;
    default:
        result = "Invalid operation.";
}
console.log("Result:", result);
