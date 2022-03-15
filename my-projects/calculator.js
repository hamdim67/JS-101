const MESSAGES = require("./calculator_messages.json");

const readline = require("readline-sync");

function messages(lang = "en", message) {
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
}

function getLanguage(lang) {
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
  return lang;
}

function invalidNum(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function getNumberInput(whichNumber, num) {
  prompt(messages(`${whichNumber}Number`, lang));
  num = readline.question();

  while (invalidNum(num)) {
    prompt(messages("invalidNumber", lang));
    num = readline.question();
  }

  return Number(num);
}

function getOperation(operation) {
  prompt(messages("getOperation", lang));
  operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(messages("invalidOperation", lang));
    operation = readline.question();
  }
}

function divideByZero(num1, num2) {
  if (num2 === 0 || Object.is(num2, -0)) {
    return prompt(messages("noDivideByZero", lang));
  } else {
    return num1 / num2;
  }
}

function performOperation(operation, num1, num2) {
  let result;
  switch (operation) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
      ß;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      result = divideByZero(num1, num2, "4");
      break;
  }

  prompt(messages("result", lang) + " " + `${result}`);
}

function runAgain() {
  prompt(messages("runAgain", lang));
  proceed = readline.question();

  while (!["yes", "y", "no", "n"].toLowerCase().includes(proceed)) {
    prompt(messages("invalidRunAgain", lang));
    proceed = readline.question();
  }
}

do {
  console.clear();
  let lang = getLanguage();

  prompt(messages(lang, "Welcome"));

  let num1 = getNumberInput("first");

  let num2 = getNumberInput("second");

  let operation = getOperation();

  performOperation(operation, num1, num2);

  let proceed = runAgain();
} while (proceed === "yes" || proceed === "y");
prompt(messages("goodbye", lang));
