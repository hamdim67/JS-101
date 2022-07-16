const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidAmount(amount) {
  while (isNaN(amount) || !(amount > 0)) {
    prompt(
      "Must enter either a whole number or number up to 2 decimal places."
    );
    amount = Number(readline.question());
  }
  return amount;
}

function getLoanAmount(amount) {
  prompt("What's the loan amount?");
  amount = readline.question();

  amount = amount.replaceAll(",", "").replaceAll("$", "");
  console.log(amount);

  invalidAmount(Number(amount));

  return Number(amount);
}

function invalidRate(rate) {
  while (isNaN(rate) || !(rate > 0)) {
    prompt(
      "Must enter either a whole number or number up to 2 decimal places."
    );
    rate = readline.question();
  }
  return rate;
}

function getMonthlyRate(rate) {
  prompt(
    "What's the Annual Percentage Rate (APR)? Enter a whole number or number up to 2 decimal places"
  );
  rate = readline.question();

  if (rate.includes("%")) {
    rate = Number(rate.slice(0, -1));
  }

  invalidRate(Number(rate));

  rate = Number(rate / 100 / 12);

  return rate;
}

function invalidDuration(years) {
  while (Number.isNaN(years) || !(years > 0)) {
    prompt("Must enter whole number for years and/or months.");
    prompt("Years:");
    years = Number(readline.question());
  }
  return years;
}

function getLoanDuration(years) {
  prompt("What is the loan duration (in years)?");

  prompt("Years:");
  years = Number(readline.question());

  return invalidDuration(years);
}

function getMonthlyPay(loanAmount, monthlyRate, loanMonths) {
  let payment;

  if (monthlyRate === 0) {
    payment = loanAmount / loanMonths;
  } else {
    payment =
      loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanMonths)));
  }

  return payment.toFixed(2);
}

let loanAmount = getLoanAmount();

let monthlyRate = getMonthlyRate();

let loanMonths = getLoanDuration() * 12;

let monthlyPay = getMonthlyPay(loanAmount, monthlyRate, loanMonths);

prompt(`Your monthly payment amount is: $${monthlyPay}.`);
