const playerChoice = document.getElementById('player-choice');
const compChoice = document.getElementById('comp-choice');
const outcome = document.getElementById('result');
const choices = document.querySelectorAll('button');
let playChoice;
choices.forEach(choices => choices.addEventListener('click', (event) => {
    playChoice = event.target.id;
    playerChoice.innerHTML = playChoice;
    genCompChoice()
}));
function genCompChoice() {
    randomNumber = math.floor(math.random() * choices.length)
    console.log(randomNumber)
}