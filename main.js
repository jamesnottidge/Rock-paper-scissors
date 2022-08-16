import  { GamePiece } from "piece.js"
const scoreEl = document.getElementById('score')
const buttons = document.querySelectorAll('.btn-rotate');
const rockTile = document.querySelector('.rock'); 
let score = 0;

let userChoice = undefined;
let computersChoice = new GamePiece('none');

buttons.forEach(button => {
    button.addEventListener('click', () => {
       let piece = button.getAttribute('name');
       userChoice = new GamePiece(piece);
    })
})

//computers choice


function updateScore(value){
    score += value;
    scoreEl.innerText = score;
}
function checkWinner(){
    const computerChoice = pickRandomChoice();

    if(userChoice==='paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' ) {
        
    }
}