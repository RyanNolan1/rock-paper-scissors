function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  let computerChoice = choiceArray[Math.floor(Math.random() * 3)];
  if (computerChoice === "Rock") {
    document.getElementById("computer-hand").src = "./images/Right Rock.png";
  } else if (computerChoice === "Paper") {
    document.getElementById("computer-hand").src = "./images/Right Paper.png";
  } else if (computerChoice === "Scissors") {
    document.getElementById("computer-hand").src = "./images/Right Scissors.png";
  }
  return computerChoice;
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons");
  buttons.forEach(function (currentButton) {
    currentButton.addEventListener("click", function () {
      getUserHandImages(currentButton.value);
      document.getElementById("score-area").innerHTML = playRound(
        currentButton.value,
        getComputerChoice()
      ).toUpperCase();
    });
  });
});

function getUserHandImages(userHandValue) {
  if (userHandValue === "Rock") {
    document.getElementById("user-hand").src = "./images/Left Rock.png";
  } else if (userHandValue === "Paper") {
    document.getElementById("user-hand").src = "./images/Left Paper.png";
  } else if (userHandValue === "Scissors") {
    document.getElementById("user-hand").src = "./images/Left Scissors.png";
  }
}

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    userScore += 1;
    document.getElementById("user-score").innerHTML = `SCORE: ${userScore}`;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "Draw! Rock draws with Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore += 1;
    document.getElementById(
      "computers-score"
    ).innerHTML = `SCORE ${computerScore}`;
    return "You Lose! Paper beats Rock";
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    userScore += 1;
    document.getElementById("user-score").innerHTML = `SCORE ${userScore}`;
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "Draw! Scissors draws with Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore += 1;
    document.getElementById(
      "computers-score"
    ).innerHTML = `SCORE: ${computerScore}`;
    return "You Lose! Rock beats Scissors";
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    userScore += 1;
    document.getElementById("user-score").innerHTML = `SCORE ${userScore}`;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "Draw! Paper draws with Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore += 1;
    document.getElementById(
      "computers-score"
    ).innerHTML = `SCORE ${computerScore}`;
    return "You Lose! Scissors beats Paper";
  }
}
