// business logic
function add(number1,number2) {
  return number1 + number2;
}
function subtract(number1,number2) {
  return number2 - number1;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1,number2));
window.alert(subtract(number2,number1));

saySomething("Welcome to the Calculator");

saySomething("The sum is " + add(3,5) + ".");