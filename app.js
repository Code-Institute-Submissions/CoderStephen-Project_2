const playerChoice = document.getElementById('player-choice');
const compChoice = document.getElementById('comp-choice');
const outcome = document.getElementById('result');
const choices = document.querySelectorAll('button');
let playChoice;
let computerPlays;

choices.forEach(choices => choices.addEventListener('click', (event) => {
    playChoice = event.target.id
    playerChoice.innerHTML = playChoice
    generateCompChoice()
}));
function generateCompChoice() {
   const randomNumber = Math.floor(Math.random() * choices.length) + 1
    
    if (randomNumber === 1){
        computerPlays = 'rock';
    } 
    if (randomNumber === 2){
        computerPlays = 'paper';
    } 
    if (randomNumber === 3) {
            computerPlays = 'scissors';
        } 
        if (randomNumber === 4) {
                computerPlays = 'lizard';
            } 
            if (randomNumber === 5) {
                    computerPlays = 'spock';
                }
                compChoice.innerHTML = computerPlays;
}