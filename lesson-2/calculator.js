//Ask for first number
//Ask for second number
//Ask user for operation
//Pperform the calculation
//Display the result

const readline = require("readline-sync");

console.log("Welcome to the calculator!");

let num1 = parseInt(readline.question("What is the first number?\n"));

let num2 = parseInt(readline.question("What is the second number?\n"));

console.log(`${num1} ${num2}`);

let operation = readline.question(
  "What operation would you like to perform?\n 1) Add 2) Subtract 3) Multiply 4) Divide\n"
);

let output;

//input from readline-sync is ALWAYS a string
//so we need to change num1 and num2 to strings

if (operation === "1") {
  output = num1 + num2;
  console.log(output);
} else if (operation === "2") {
  output = num1 - num2;
  console.log(output);
} else if (operation === "3") {
  output = num1 * num2;
  console.log(output);
} else if (operation === "4") {
  output = num1 / num2;
  console.log(output);
}
