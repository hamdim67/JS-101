//Bonus feature #3
//Internationalize your messages by sending the JSON configuration file
//to translators and calling the right translation in your code

const MESSAGES = require("./calculator_messages.json");
const readline = require("readline-sync");
let lang = readline.question();

//Want to ask what language they want
//Then i want to access the language code and then
//display the messages in that language

function messages(lang = "en", message) {
  return MESSAGES[lang][message];
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let num1;
let num2;

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function getNumberInput() {
  num1 = readline.question();
  num2 = readline.question();
}

while (true) {
  prompt("What language would you like?");

  prompt(messages("Welcome"));

  prompt(messages[lang]["Welcome"]);

  prompt(MESSAGES[lang]["firstNumber"]);

  num1 = getNumberInput(
    prompt(MESSAGES[lang]["firstNumber"]),
    invalidNumber(num1)
  );

  num2 = getNumberInput(
    prompt(MESSAGES[lang]["secondNumber"]),
    invalidNumber(num2)
  );

  console.log(`${num1}\n${num2}`);

  prompt(MESSAGES.performOperation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES.invalidOperation);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(num1) + Number(num2);
      break;
    case "2":
      output = Number(num1) - Number(num2);
      break;
    case "3":
      output = Number(num1) * Number(num2);
      break;
    case "4":
      output = Number(num1) / Number(num2);
      break;
  }

  console.log(MESSAGES.moreOperations);
  let proceed = readline.question();
  if (proceed === "yes" || proceed === "y") {
    continue;
  } else if (proceed === "no" || proceed === "n") {
    console.log(`The result is ${output}.`);
    break;
  }
}
