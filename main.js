var addPlayersScreen = document.querySelector(".add-players-screen");
var rulesScreen = document.querySelector(".rules-screen");
var header = document.querySelector("header");
var gamePlayContainer = document.querySelector("section");
var inputPlayer1 = document.querySelector(".input-player-1");
var inputPlayer2 = document.querySelector(".input-player-2");
var playGameButton = document.querySelector(".play-game-button");
var p1ErrorMessage = document.querySelector(".p1-error-message");
var playGameButton2 = document.querySelector(".play-game-button2");
var main = document.querySelector("main");
var p1span = document.querySelector(".p1-span");
var p2span = document.querySelector(".p2-span");
var cardArea = document.querySelector(".card-area");
var p1name = document.querySelector(".p1-name");
var p2name = document.querySelector(".p2-name");

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
  if (!inputPlayer1.value) {
    p1ErrorMessage.classList.remove("hidden");
  } else {
    addPlayersScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
    p1span.innerHTML = inputPlayer1.value;
    p2span.innerHTML = inputPlayer2.value;
  }
}

function advanceToGameBoard() {
  p1name.innerHTML = inputPlayer1.value;
  p2name.innerHTML = inputPlayer2.value;
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.remove("hidden");
  header.classList.add("hidden");
}

function startGame() {
  // for loop deck data
  // instaciate card for each [i] in loop
  // declare var for array of cards and pass into deck
}

function checkIfCardsMatch() {
  // find a way to check if card is facing up
  // if 2 cards are facing up, check to see if they match
  // if they match, make them dissapear
  // Player 1s match score should increase by +1
}

function buttonConditionals(event) {
    if (event.target.classList.contains("card1")) {
      document.querySelector(".card1").classList.toggle("flip");
      console.log(card1.dataset.card1);
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
