"use strict";
const readline = require("readline-sync");
const VALID_CHOICES = {
  rock: "r",
  paper: "p",
  scissors: "sc",
  lizard: "l",
  spock: "sp",
};

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

const WIN_SCORE = 3;

let choice;
let computerChoice;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let answer;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function removeRepeats(obj, input) {
  let result = "";
  for (let key in obj) {
    if (input.indexOf(obj[key]) !== input.lastIndexOf(obj[key])) {
      result = [...new Set(input)].join(" ");
    } else {
      result = input;
    }
  }
  return result;
}

function checkShortInput(obj, input) {
  let result = "";
  for (let key in obj) {
    if (input === key || input === obj[key]) {
      result = key;
    }
  }

  return result;
}

function getUserChoice(VALID_CHOICES, choice) {
  //use Set() to remove any repeated characters from user choice
  choice = removeRepeats(VALID_CHOICES, choice);

  while (!validChoice(VALID_CHOICES, choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  //If user's choice is shortened input, change
  //it to full word
  choice = checkShortInput(VALID_CHOICES, choice);

  return choice;
}

function validChoice(VALID_CHOICES, choice) {
  return Object.entries(VALID_CHOICES).join("").includes(choice);
}

function getComputerChoice(VALID_CHOICES, computerChoice) {
  let randomIndex = Math.floor(
    Math.random() * Object.keys(VALID_CHOICES).length
  );

  computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

  return computerChoice;
}

function userWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function scoreTally(choice, computerChoice) {
  if (userWins(choice, computerChoice)) {
    playerScore += 1;
    round += 1;
  } else if (playerScore === computerScore) {
    console.log("It's a tie....");
  } else {
    computerScore += 1;
    round += 1;
  }
}

function displayWinner(choice, computerChoice) {
  if (userWins(choice, computerChoice)) {
    prompt("You win!");
  } else if (choice === computerChoice) {
    prompt("It's a tie...");
  } else {
    prompt("Computer wins :(");
  }
}

function getGrandWinner(playerScore, computerScore, WIN_SCORE) {
  if (playerScore === WIN_SCORE) {
    prompt("You are the Grand Winner!");
    round = 0;
  } else if (computerScore === WIN_SCORE) {
    prompt("Computer is Grand Winner :(");
    round = 0;
  }
  return round;
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

for (let counter = 0; counter <= round; counter++) {
  do {
    console.clear();

    prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock game!");

    prompt("The first player to get 3 wins wins the the game!");

    prompt(`"Choose one: ${Object.entries(VALID_CHOICES).join(", ")}."`);
    choice = readline.question().toLowerCase();

    choice = getUserChoice(VALID_CHOICES, choice);

    computerChoice = getComputerChoice(VALID_CHOICES, computerChoice);

    prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

    displayWinner(choice, computerChoice);

    scoreTally(choice, computerChoice);

    console.log(`Player's Score: ${playerScore}`);
    console.log(`Computer's Score: ${computerScore}`);
    console.log(`Round: ${round}`);

    if (getGrandWinner(playerScore, computerScore, WIN_SCORE) === 0) break;

    answer = runAgain(answer);
  } while (answer === "yes" || answer === "y");

  if (round === 0) break;
}
