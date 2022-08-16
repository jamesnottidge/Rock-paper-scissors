export class Display {
  constructor(score) {
    this._score = score;
  }

  displayTile(choice, player) {
    const userPicked = document.querySelector("#you-picked");
    const computerPicked = document.querySelector("#computer-pic");

    player === "user"
      ? (userPicked.innerHTML = choice.getHTML())
      : computerPicked.getHTML();
  }

  displayTileWinner(winner, score) {
    const win = document.querySelector("#win");
    const scoreBoard = document.querySelector("#score");

    if (winner === "user") {
      win.innerHTML = "You win";
      scoreBoard.innerHTML = score;
    } else {
      win.innerHTML = "You Lose";
    }
  }
}
