var addPlayersScreen = document.querySelector(".add-players-screen");
var rulesScreen = document.querySelector(".rules-screen");
var header = document.querySelector("header");
var cardArea = document.querySelector(".card-area");
var inputPlayer1 = document.querySelector(".input-player-1");
var playGameButton = document.querySelector(".play-game-button");


window.onload = rulesScreen.classList.add("hidden");
// window.onload = addPlayersScreen.classList.add("hidden");
// window.onload = header.classList.add("hidden");
window.onload = cardArea.classList.add("hidden");
window.onload = playGameButton.disabled = true;

inputPlayer1.addEventListener("keyup", validateUserInput);

function validateUserInput() {
  if (inputPlayer1.value) {
    playGameButton.disabled = false;
  } else {
    playGameButton.disabled = true;
  }
}
