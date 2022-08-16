export class GamePiece {
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
