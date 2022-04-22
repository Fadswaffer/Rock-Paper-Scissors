const choices = ["rock", "paper", "scissors"];
const winners = [];
const resetButton = document.querySelector("#reset");
const roundResult = document.querySelector("#roundResult");
const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");
// function game() {
//   for (let i = 1; i <= 5; i++) {
//     playRound(i);
//   }
//   logWins();
//
function playRound(round) {}

function computerChoice() {
  // move update to DOM
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
}

game();
