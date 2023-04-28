function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  return choiceArray[Math.floor(Math.random() * 3)];
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buttons");
  buttons.forEach(function (currentButton) {
    currentButton.addEventListener("click", function () {
      getHandImages(currentButton.value);
      console.log(playRound(currentButton.value, getComputerChoice()));
    });
  });
});

function getHandImages(handValue) {
  if (handValue === "Rock") {
    document.getElementById("user-hand").src ="./images/rock.jpg";
  } else if (handValue === "Paper") {
    document.getElementById("user-hand").src ="./images/paper.jpg";
  } else if (handValue === "Scissors") {
    document.getElementById("user-hand").src ="./images/scissors.jpg";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "Draw! Rock draws with Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "Draw! Scissors draws with Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  }

  if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "Draw! Paper draws with Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  }
}
