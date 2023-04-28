function getComputerChoice() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  return choiceArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection + " Computers selection");

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

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
