var addPlayersScreen = document.querySelector(".add-players-screen");
var rulesScreen = document.querySelector(".rules-screen");
var header = document.querySelector("header");
var gamePlayContainer = document.querySelector("section");
var inputPlayer1 = document.querySelector(".input-player-1");
var playGameButton = document.querySelector(".play-game-button");
var p1ErrorMessage = document.querySelector(".p1-error-message");
var playGameButton2 = document.querySelector(".play-game-button2");
var main = document.querySelector("main");

window.onload = onLoad();

inputPlayer1.addEventListener("keyup", validateUserInput);
playGameButton.addEventListener("click", advanceToRulesScreen);
playGameButton2.addEventListener("click", advanceToGameBoard);

function onLoad() {
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.add("hidden");
  playGameButton.disabled = true;
  p1ErrorMessage.classList.add("hidden");
  playGameButton.classList.add("disabled");
}

function validateUserInput() {
  if (inputPlayer1.value) {
    playGameButton.disabled = false;
    playGameButton.classList.remove("disabled");
  } else {
    playGameButton.disabled = true;
  }
}

function advanceToRulesScreen() {
  if (inputPlayer1.value === "") {
    p1ErrorMessage.classList.remove("hidden");
  } else {
    addPlayersScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
  }
}

function advanceToGameBoard() {
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.remove("hidden");
  header.classList.add("hidden");
}
