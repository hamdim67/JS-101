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

function getMonthlyRate(annualRate) {
  prompt("What's the Annual Percentage Rate (APR)?");
  annualRate = readline.question();

  if (annualRate.includes("%")) {
    annualRate = Number(annualRate.slice(0, -1));
  }

  annualRate = Number(annualRate / 100 / 12);

  return annualRate;
}

function getLoanDuration(durationYears, durationMonths) {
  prompt("What is the loan duration?");

  prompt("Years:");
  durationYears = Number(readline.question()) * 12;
  prompt("Months:");
  durationMonths = Number(readline.question());

  //Now cmnvert durationYears to months and add to durationMonths
  //to get loanMonths

  return durationYears + durationMonths;
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
console.log(loanAmount);

let monthlyRate = getMonthlyRate();
console.log(monthlyRate);

let loanMonths = getLoanDuration();
console.log(loanMonths);

let monthlyPay = getMonthlyPay(loanAmount, monthlyRate, loanMonths);

prompt(`Your monthly payment amount is: $${monthlyPay}.`);
