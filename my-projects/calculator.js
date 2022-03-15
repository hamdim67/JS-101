const MESSAGES = require("./calculator_messages.json");
let lang = "en";
let num1;
let num2;

const readline = require("readline-sync");

function messages(message, lang) {
  return MESSAGES[lang][message];
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function checkValidLanguage(lang) {
  while (!["1", "2", "3"].includes(lang)) {
    prompt(MESSAGES.invalidLang);
    lang = readline.question();
  }
  return lang;
}

function getLanguage() {
  prompt(MESSAGES.LANGUAGE);
  lang = readline.question();

  checkValidLanguage(lang);

  switch (lang) {
    case "1":
      lang = "en";
      break;
    case "2":
      lang = "es";
      break;
    case "3":
      lang = "fr";
      break;
  }
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function getNumberInput(whichNumber) {
  prompt(messages(`${whichNumber}Number`, lang));
  let num = readline.question();

  while (invalidNum(num)) {
    prompt(messages("invalidNumber", lang));
    num = readline.question();
  }

  return Number(num);
}

let operation;

function getOperation() {
  prompt(messages("getOperation", lang));
  operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages("invalidOperation", lang));
    operation = readline.question();
  }

  return operation;
}

function divideByZero() {
  if (num2 === 0 || Object.is(num2, -0)) {
    return prompt(messages("noDivideByZero", lang));
  } else {
    return num1 / num2;
  }
}

function performOperation() {
  let result;
  switch (operation) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      result = divideByZero(num2, "4");
      break;
  }

  prompt(messages("result", lang) + " " + `${result}`);
}

let proceed;

function runAgain() {
  prompt(messages("runAgain", lang));
  proceed = readline.question();

  while (!["yes", "y", "no", "n"].includes(proceed)) {
    prompt(messages("invalidRunAgain", lang));
    proceed = readline.question();
  }

  return proceed;
}

do {
  console.clear();
  getLanguage();

  prompt(messages("Welcome", lang));
  //Why does the 'message' need to come first?
  //I tried switching the order of the arguments and it didn't work

  num1 = getNumberInput("first");

  num2 = getNumberInput("second");

  getOperation(operation);

  performOperation(operation, num1, num2);

  runAgain(proceed);
} while (proceed === "yes" || proceed === "y");
prompt(messages("goodbye", lang));
