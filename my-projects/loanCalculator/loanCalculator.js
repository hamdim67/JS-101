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

function invalidDuration(years, months) {
  while (isNaN(years) || isNaN(months) || !(years > 0) || months < 0) {
    prompt("Must enter whole number for years and/or months.");
    prompt("Years:");
    years = Number(readline.question()) * 12;
    prompt("Months:");
    months = Number(readline.question());
  }
  console.log(years);
  console.log(months);
}

function getLoanDuration(years, months) {
  prompt("What is the loan duration?");

  prompt("Years:");
  years = Number(readline.question()) * 12;
  prompt("Months:");
  months = Number(readline.question());

  invalidDuration(Number(years), Number(months));

  return years + months;
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

let loanMonths = getLoanDuration();

let monthlyPay = getMonthlyPay(loanAmount, monthlyRate, loanMonths);

prompt(`Your monthly payment amount is: $${monthlyPay}.`);
