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
var cardArea = document.querySelector(".card-area");

var deckOfCards = [];
// var card1 = ({name: 'card1', matchId: 01, isMatched: false, imageFront: url(), imageBack:()})

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
  // createCardsOnDOM();
}

function createInstance() {
  var pastIdea = new Idea(titleInput.value, bodyInput.value);
  ideaLog.push(pastIdea);
  return pastIdea;
}

function createInstance() {
  var pastIdea = new Idea(titleInput.value, bodyInput.value);
  ideaLog.push(pastIdea);
  return pastIdea;
}

function createCardsOnDOM() {
  var pcard1 = new Card ({cardId: 01, imageFront:"./images/card_01.png"});
  var pcard2 = new Card ({cardId: 02, imageFront:"./images/card_02.png"});
  var pcard3 = new Card ({cardId: 03, imageFront:"./images/card_03.png"});
  document.querySelector(".card-spot-1").insertAdjacentHTML('beforeend',
   `
   <div class="card card1" data="card1">
     <img class ="c1 card-back" src="./images/mario_card_back.jpg" alt="mario bricks">
     <img class ="c1 card-face" src="./images/card_01.png" alt="blue flower">
   </div>
   `
)
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
    if (event.target.classList.contains("c1")) {
      document.querySelector(".card1").classList.toggle("flip");
    }
    if (event.target.classList.contains("c2")) {
      document.querySelector(".card2").classList.toggle("flip");
    }
    if (event.target.classList.contains("c3")) {
      document.querySelector(".card3").classList.toggle("flip");
    }
    if (event.target.classList.contains("c4")) {
      document.querySelector(".card4").classList.toggle("flip");
    }
    if (event.target.classList.contains("c5")) {
      document.querySelector(".card5").classList.toggle("flip");
    }
    if (event.target.classList.contains("c6")) {
      document.querySelector(".card6").classList.toggle("flip");
    }
    if (event.target.classList.contains("c7")) {
      document.querySelector(".card7").classList.toggle("flip");
    }
    if (event.target.classList.contains("c8")) {
      document.querySelector(".card8").classList.toggle("flip");
    }
    if (event.target.classList.contains("c9")) {
      document.querySelector(".card9").classList.toggle("flip");
    }
    if (event.target.classList.contains("c10")) {
      document.querySelector(".card10").classList.toggle("flip");
    }
}
