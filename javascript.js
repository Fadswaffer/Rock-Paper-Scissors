const choices = ["rock", "paper", "scissors"];
const winners = [];
const resetButton = document.querySelector("#reset");
const roundResult = document.querySelector("#roundResult");
const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");

function resetGame() {
  //Start the game over
}
function playRound(round) {
  // Clicking the buttons will call checkWinner
}

function countWins() {
  // Game ends at 5 wins for either computer or player.
}

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
