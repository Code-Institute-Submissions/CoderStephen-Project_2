const playerChoice = document.getElementById('player-choice');
const compChoice = document.getElementById('comp-choice');
const outcome = document.getElementById('result');
const choices = document.getElementsByClassName('options');
let playChoice;
choices.forEach(choices => choices.addEventListener('click', (event) => {
    playChoice = event.target.id;
    playerChoice.innerHTML = playChoice;
}));
