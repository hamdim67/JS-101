const readline = require("readline-sync");
const VALID_CHOICES = {
  rock: ["r", "rock"],
  paper: ["p", "paper"],
  scissors: ["sc", "scissors"],
  lizard: ["l", "lizard"],
  spock: ["sp", "spock"],
};

const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

let round = 0;
let playerScore = 0;
let computerScore = 0;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function userWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function scoreTally(choice, computerChoice) {
  if (userWins(choice, computerChoice)) {
    playerScore += 1;
    round += 1;
  } else {
    computerScore += 1;
    round += 1;
  }
  return [playerScore, computerScore, round];
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

let answer;

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
  gameRound: do {
    console.clear();

    prompt(`"Choose one: ${Object.values(VALID_CHOICES).join(", ")}."`);
    let choice = readline.question();

    while (!Object.keys(VALID_CHOICES)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(
      Math.random() * Object.keys(VALID_CHOICES).length
    );

    let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

    prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

    displayWinner(choice, computerChoice);

    [playerScore, computerScore, round] = scoreTally(choice, computerChoice);
    console.log(`Player's Score: ${playerScore}`);
    console.log(`Computer's Score: ${computerScore}`);
    console.log(`Round: ${round}`);

    if (playerScore === 3) {
      prompt("You are the Grand Winner!");
      round = 0;
      break gameRound;
    } else if (computerScore === 3) {
      prompt("Computer is Grand Winner :(");
      round = 0;
      break gameRound;
    }

    answer = runAgain(answer);
  } while (answer === "yes" || answer === "y");

  if (round === 0) break;
}
