const choices = ["rock", "paper", "scissors"];
let log = "";
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      log = "You Lose! Paper beats Rock";
    } else if (computerSelection === "Scissors") {
      log = "You Win! Rock beats Scissors";
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      log = "You Lose! Scissors beats Paper";
    } else if (computerSelection === "Rock") {
      log = "You Win! Paper beats Rock";
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      log = "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      console.log = "You Win! Scissors beats Paper";
    } else {
      log = "It's a tie";
    }
  }
  return log;
}

function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}
// console.log(computerSelection());

function playerSelection() {
  const playerSelection = prompt(
    "Choose only one of these: Paper, Rock, Scissors."
  );

  return playerSelection.trim().toLowerCase();
}

function game() {
  let playerSelect = playerSelection();
  let computerSelect = computerSelection();

  let roundScore = playRound(playerSelection, computerSelection);

  if (roundScore.search("You Win!" > -1)) {
    playerScore++;
  } else if (roundScore.search("You Lose!" > -1)) {
    computerScore++;
  }
  if (playerScore > 5 || computerScore > 5) console.log("game over");
}

console.log(game());
