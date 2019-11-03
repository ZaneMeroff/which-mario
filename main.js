var addPlayersScreen = document.querySelector(".add-players-screen");
var rulesScreen = document.querySelector(".rules-screen");
var header = document.querySelector("header");
var gamePlayContainer = document.querySelector("section");
var inputPlayer1 = document.querySelector(".input-player-1");
var playGameButton = document.querySelector(".play-game-button");
var p1ErrorMessage = document.querySelector(".p1-error-message");
var playGameButton2 = document.querySelector(".play-game-button2");
var main = document.querySelector("main");
var p1span = document.querySelector("span");
var cardArea = document.querySelector(".card-area");
var p1name = document.querySelector(".p1-name");

window.onload = onLoad();

cardArea.addEventListener("click", buttonConditionals);
playGameButton.addEventListener("click", advanceToRulesScreen);
playGameButton2.addEventListener("click", advanceToGameBoard);

function onLoad() {
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.add("hidden");
  p1ErrorMessage.classList.add("hidden");
  playGameButton.classList.add("disabled");
}

function advanceToRulesScreen() {
  if (inputPlayer1.value === "") {
    p1ErrorMessage.classList.remove("hidden");
  } else {
    addPlayersScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
    p1span.innerHTML = inputPlayer1.value;
  }
}

function advanceToGameBoard() {
  p1name.innerHTML = inputPlayer1.value;
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.remove("hidden");
  header.classList.add("hidden");
}

function buttonConditionals(event) {
    if (event.target.classList.contains("card1")) {
      document.querySelector(".card1").classList.toggle("flip");
    }
    if (event.target.classList.contains("card2")) {
      document.querySelector(".card2").classList.toggle("flip");
    }
    if (event.target.classList.contains("card3")) {
      document.querySelector(".card3").classList.toggle("flip");
    }
    if (event.target.classList.contains("card4")) {
      document.querySelector(".card4").classList.toggle("flip");
    }
    if (event.target.classList.contains("card5")) {
      document.querySelector(".card5").classList.toggle("flip");
    }
    if (event.target.classList.contains("card6")) {
      document.querySelector(".card6").classList.toggle("flip");
    }
    if (event.target.classList.contains("card7")) {
      document.querySelector(".card7").classList.toggle("flip");
    }
    if (event.target.classList.contains("card8")) {
      document.querySelector(".card8").classList.toggle("flip");
    }
    if (event.target.classList.contains("card9")) {
      document.querySelector(".card9").classList.toggle("flip");
    }
    if (event.target.classList.contains("card10")) {
      document.querySelector(".card10").classList.toggle("flip");
    }
}
