const Choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;

let winners = [];
reset.addEventListener("click", () => location.reload());

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}
function computerPlay() {
  return Choices[Math.floor(Math.random() * Choices.length)];
}
function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerPlay();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}
function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  if (playerWins == 5) {
    document.querySelector(".winner").textContent = "You won all 5 games!";
  } else {
    document.querySelector(".winner").textContent =
      "Better Luck Next Time!, Hit Reset to play again!";
  }
}
function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The Computer Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function startGame() {
  //play the game until someone wins 5 times
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}
function checkWinner(choice1, choice2) {
  if (
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The Computer won the Round";
  } else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}
startGame();
