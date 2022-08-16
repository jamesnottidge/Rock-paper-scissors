export class Display {
  constructor() {}

  displayTile(choice, player) {
    const userPicked = document.querySelector("#you-picked");
    const computerPicked = document.querySelector("#computer-pic");
    player === "user"
      ? (userPicked.innerHTML = choice.getHTML())
      : computerPicked.getHTML();
  }
}
