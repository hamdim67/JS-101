const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getLoanAmount(amount) {
  prompt("What's the loan amount?");
  amount = readline.question();

  if (amount.includes("$")) {
    amount = Number(amount.replaceAll(",", "").replaceAll("$", ""));
  } else if (!amount.includes("$")) {
    amount = Number(amount.replaceAll(",", ""));
  }

  return amount;
}

function getMonthlyRate(rate) {
  prompt(
    "What's the Annual Percentage Rate (APR)? Enter whole number or number to 2 decimal places"
  );
  rate = readline.question();

  if (rate.includes("%")) {
    rate = Number(rate.slice(0, -1));
  }

  rate = Number(rate / 100 / 12);

  return rate;
}

function getLoanDuration(years, months) {
  prompt("What is the loan duration?");

  prompt("Years:");
  years = Number(readline.question()) * 12;
  prompt("Months:");
  months = Number(readline.question());

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
