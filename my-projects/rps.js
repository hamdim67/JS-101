const readline = require("readline-sync");
const VALID_CHOICES = [
  "r",
  "rock",
  "p",
  "paper",
  "s",
  "scissors",
  "l",
  "lizard",
  "sp",
  "spock",
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getValidChoice(decision) {
  if (decision === ("r" || "rock")) {
    decision = "rock";
  } else if (decision === ("p" || "paper")) {
    decision = "paper";
  } else if (decision === ("s" || "scissors")) {
    decision = "scissors";
  } else if (decision === ("l" || "lizard")) {
    decision = "lizard";
  } else if (decision === ("sp" || "spock")) {
    decision = "spock";
  }
  return decision;
}

function userChoice(choice, computerChoice) {
  if (
    (choice === "rock" && computerChoice === ("scissors" || "lizard")) ||
    (choice === "paper" && computerChoice === ("rock" || "spock")) ||
    (choice === "scissors" && computerChoice === ("paper" || "lizard")) ||
    (choice === "lizard" && computerChoice === ("spock" || "paper")) ||
    (choice === "spock" && computerChoice === ("scissors" || "rock"))
  ) {
    console.log("You win!");
  }
}

function opponent(choice, computerChoice) {
  if (
    (choice === ("scissors" || "lizard") && computerChoice === "rock") ||
    (choice === ("rock" || "spock") && computerChoice === "paper") ||
    (choice === ("paper" || "lizard") && computerChoice === "scissors") ||
    (choice === ("spock" || "paper") && computerChoice === "lizard") ||
    (choice === ("rock" || "scissors") && computerChoice === "spock")
  ) {
    console.log("Computer wins :(");
  }
}

function displayWinner(userChoice, opponent) {
  if (userChoice) {
    return userChoice;
  } else if (opponent) {
    return opponent;
  } else {
    return "It's a tie...";
  }
}

function runAgain(answer) {
  prompt("Do you want to play another game?");
  answer = readline.question().toLowerCase();

  while (!["yes", "y", "no", "n"].includes(answer)) {
    prompt("Sorry that's an invalid option. Please enter yes, y, no, or n.");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

let answer;

do {
  console.clear();
  prompt(`"Choose one: ${VALID_CHOICES.join(", ")}."`);
  let choice = readline.question();

  choice = getValidChoice(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  computerChoice = getValidChoice(computerChoice);

  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  displayWinner(
    userChoice(choice, computerChoice),
    opponent(choice, computerChoice)
  );

  answer = runAgain();
} while (answer === "yes" || answer === "y");
