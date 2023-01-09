// business logic
function add(number1,number2) {
  return number1 + number2;
}
function subtract(number1,number2) {
  return number2 - number1;
}

function multiply(number1,number2) {
  return number1 * number2;
}

function divide(number1,number2) {
  return number1 / number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The result is " + add(number1,number2)+ ".");
window.alert("The result is " + subtract(number2,number1)+ ".");
window.alert("The result is " + multiply(number2,number1)+ ".");
window.alert("The result is " + divide(number2,number1)+ ".");

saySomething("Welcome to the Calculator");

saySomething("The sum is " + add(3,5) + ".");