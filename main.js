class GamePiece {
  constructor(piece) {
    this._piece = piece;
  }

  getPiece() {
    return this._piece;
  }

  getHTML() {
    return this._piece === "rock"
      ? `<button class="btn-rotate rock" name="rock">
        <span class="wrapper">
        <img src="./images/icon-rock.svg" alt="rock icon">
        </span>
      </button>`
      : this._piece === "paper"
      ? `<button class="btn-rotate     paper" name="paper">
        <span class="wrapper">
          <img src="./images/icon-paper.svg" alt="paper icon">
        </span>
      </button>`
      : this._piece === "scissors"
      ? `<button class="btn-rotate scissors" name="scissors">
      <span class="wrapper">
        <img src="./images/icon-scissors.svg" alt="scissors icon">
      </span>
      </button>`
      : null;
  }
  getRandomPiece() {
    const choices = ["paper", "rock", "scissors"];
    this._piece = choices[Math.floor(Math.random() * choices.length)];
    return this._piece;
  }
}

class Display {
  constructor() {}

  displayTile(choice, player) {
    const userPicked = document.querySelector("#you-picked");
    const computerPicked = document.querySelector("#computer-picked");
    player === "user"
      ? (userPicked.innerHTML = choice.getHTML())
      : (computerPicked.innerHTML = choice.getHTML());
  }
}

const scoreEl = document.getElementById("score");
const buttons = document.querySelectorAll(".btn-rotate");
const rockTile = document.querySelector(".rock");
const display = new Display();
let score = 0;

let userChoice = undefined;
let computersChoice = new GamePiece("none");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let piece = button.getAttribute("name");
    userChoice = new GamePiece(piece);
    display.displayTile(userChoice, "user");
    console.log(computersChoice.getRandomPiece());
    display.displayTile(computersChoice, "computer");
  });
});

//computers choice

function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}
function checkWinner() {
  const computerChoice = pickRandomChoice();

  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
  }
}
