// business logic
function add(number1,number2) {
  return number1 + number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1,number2));

saySomething("Welcome to the Calculator");

saySomething("The sum is " + add(3,5) + ".");