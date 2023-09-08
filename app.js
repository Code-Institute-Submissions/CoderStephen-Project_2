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

    let computerChoice = math.floor(math.random() * 5);

    computerChoiceDisplay.src = 'assets/images/${choices[playerChoice]}.jpg';
    computerChoiceDisplay.alt = choices[playerChoice];

    let result = checkWinner(choices [computerChoice], choices[playerChoice]);

    updateScores(result);

}

function checkWinner () {
    if (computerChoice)
}