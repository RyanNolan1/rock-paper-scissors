
function getComputerChoice() {
    const choiceArray = ["Rock", "Paper", "Scissors"]
    console.log(choiceArray[Math.floor(Math.random() * 3)])
}

getComputerChoice()