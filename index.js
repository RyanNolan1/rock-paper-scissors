
function getComputerChoice() {
    const choiceArray = ["Rock", "Paper", "Scissors"]
    return choiceArray[Math.floor(Math.random() * 3)]
}

function playRound (playerSelection, computerSelection) {
    console.log(computerSelection + " Computers selection")

    if ( playerSelection === 'Rock' && computerSelection === 'Scissors' ) {
        return 'You Win! Rock beats Scissors'

    } else if ( playerSelection === 'Rock' && computerSelection === 'Rock' ) {
        return 'Draw! Rock draws with Rock'

    } else if ( playerSelection === 'Rock' && computerSelection === 'Paper' ) {
        return 'You Lose! Paper beats Rock'
}
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection));