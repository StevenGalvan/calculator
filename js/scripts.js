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

window.alert(add(number1,number2));
window.alert(subtract(number2,number1));
window.alert(multiply(number2,number1));
window.alert(divide(number2,number1));

saySomething("Welcome to the Calculator");

saySomething("The sum is " + add(3,5) + ".");