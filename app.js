const buttons = document.getElementsByClassName("controls");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("comp-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("comp-choice");
const choices = ["rock","paper","scissors","lizard","spock"];

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        let playerChoice = this.getAttribute("data-type");
        playGame(playerChoice);
    });
}

function playGame (playerChoice) {
    playerChoiceDisplay.src = 'assets/images/${choices[playerChoice]}.jpg';
    playerChoiceDisplay.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerChoiceDisplay.src = 'assets/images/${choices[playerChoice]}.jpg';
    computerChoiceDisplay.alt = choices[playerChoice];

    let result = checkWinner(choices [computerChoice], choices[playerChoice]);

    updateScores(result);

}

function checkWinner () {
    if (computerChoice === playerChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === choices['0'] && playerChoice === choices['2']) {
        result = 'You win!'
    }
    if (computerChoice === choices['0'] && playerChoice === choices['4']) {
        result = 'You win!';
    }
    if (computerChoice === choices['0'] && playerChoice === choices['1']) {
        result = 'You lose!'
    }
    if (computerChoice === choices['0'] && playerChoice === choices['3']) {
        result = 'You lose!';
    }
    if (computerChoice === choices['1'] && playerChoice === choices['2']) {
        result = 'You lose!';
    }
    if (computerChoice === choices['1'] && playerChoice === choices['3']) {
        result = 'You lose!';
    }
    if (computerChoice === choices ['1'] && playerChoice === choices ['4']) {
        result = 'You win!';
    }
    if (computerChoice === choices['1'] && playerChoice === choices['0']) {
        result = 'You win!';
    }
    if (computerChoice === choices['2'] && playerChoice === choices['3']) {
        result = 'You win!';
    }
    if (computerChoice === choices['2'] && playerChoice === choices['4']) {
        result = 'You lose!';
    }
    if (computerChoice === choices['3'] && playerChoice === choices['4']) {
        result = 'You win!';
    }
}