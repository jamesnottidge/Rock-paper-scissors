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
  constructor(score) {
    this._score = 0;
  }

  displayTile(choice, player) {
    const userPicked = document.querySelector("#you-picked");
    const computerPicked = document.querySelector("#computer-picked");

    player === "user"
      ? (userPicked.innerHTML = choice.getHTML())
      : (computerPicked.innerHTML = choice.getHTML());
  }

  displayTileWinner(winner) {
    const win = document.querySelector("#win");
    const scoreBoard = document.querySelector("#score");
    console.log(winner);
    if (winner === "user") {
      win.innerHTML = "You win";
      this._score += 1;
      scoreBoard.innerHTML = `${this._score}`;
    } else {
      win.innerHTML = "You Lose";
    }
  }

  checkWinner(userChoice, computerChoice) {
    if (
      (userChoice.getPiece() === "paper" &&
        computerChoice.getPiece() === "rock") ||
      (userChoice.getPiece() === "rock" &&
        computerChoice.getPiece() === "scissors") ||
      (userChoice.getPiece() === "scissors" &&
        computerChoice.getPiece() === "paper")
    ) {
      return "user";
    } else {
      return "computer";
    }
  }
}

const scoreEl = document.getElementById("score");
const buttons = document.querySelectorAll(".btn-rotate");
const rockTile = document.querySelector(".rock");
const display = new Display(0);

let userChoice = undefined;
let computersChoice = new GamePiece("none");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let piece = button.getAttribute("name");
    userChoice = new GamePiece(piece);
    computersChoice.getRandomPiece();
    display.displayTile(userChoice, "user");
    display.displayTile(computersChoice, "computer");
    display.displayTileWinner(display.checkWinner(userChoice, computersChoice));
  });
});
