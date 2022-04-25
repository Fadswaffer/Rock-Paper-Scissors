const optionBtn = document.querySelectorAll("div.optionButtons button");
const roundResults = document.querySelector("#roundResults");
const playerPoints = document.querySelector("#playerScore");
const computerPoints = document.querySelector("#computerScore");
const ties = document.querySelector("#ties");
const resetBtn = document.querySelector("#reset");
const computerChoices = ["Rock", "Paper", "Scissors"];
// const computerChoices = [0, 1, 2];

let playerChoice;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

resetBtn.addEventListener("click", () => location.reload());
optionBtn.forEach((button) => {
  button.addEventListener("click", PlayerSelection);
});

// function checkWinner() {
//   if (playerScore === 5 || computerScore === 5) {
//     if (playerScore === computerScore) {
//       // update winner to tie
//     } else {
//       let win = `${computerScore > playerScore ? "computer" : "playerPoints"}`;
//       winnerMessage(win);
//     }
//   }
// }

function computerPlay() {
  let computerPick =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerPick;
}
// function winnerMessage(winner) {
//   document.querySelector("#scores").textContent = ``;
// }

function playRound(playerChoice, computerPick) {
  // let playerChoice = playerSelection();
  // let computerPick =
  if (
    (playerChoice == "Rock" && computerPick == "Scissors") ||
    (playerChoice == "Paper" && computerPick == "Rock") ||
    (playerChoice == "Scissors" && computerPick == "Paper")
  ) {
    playerPoints.textContent = ++playerScore;
  } else if (playerChoice == computerPick) {
    ties.textContent = ++tieScore;
  } else {
    computerPoints.textContent = ++computerScore;
  }
  checkWinner();
}
function PlayerSelection(e) {
  let playerChoice = e.target.id;
  playerChoice = e.target.textContent;
  playRound(playerChoice, computerPlay());
}
function checkWinner() {
  if (playerScore === 5 || computerScore === 5 || tieScore == 5) {
    if (playerScore === computerScore) {
      // update winner to tie
    } else {
      let win = `${computerScore > playerScore ? "computer" : "playerPoints"}`;
      winnerMessage(win);
    }
  }
}
