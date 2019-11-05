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
var pcard1 = new Card ({cardId: 0, matchId:"a", imageFront:"./images/card_01.png"});
var pcard2 = new Card ({cardId: 1, matchId:"b", imageFront:"./images/card_02.png"});
var pcard3 = new Card ({cardId: 2, matchId:"c", imageFront:"./images/card_03.png"});
var pcard4 = new Card ({cardId: 3, matchId:"d", imageFront:"./images/card_04.png"});
var pcard5 = new Card ({cardId: 4, matchId:"e", imageFront:"./images/card_05.png"});
var pcard6 = new Card ({cardId: 5, matchId:"a", imageFront:"./images/card_01.png"});
var pcard7 = new Card ({cardId: 6, matchId:"b", imageFront:"./images/card_02.png"});
var pcard8 = new Card ({cardId: 7, matchId:"c", imageFront:"./images/card_03.png"});
var pcard9 = new Card ({cardId: 8, matchId:"d", imageFront:"./images/card_04.png"});
var pcard10 = new Card ({cardId: 9, matchId:"e", imageFront:"./images/card_05.png"});
var deckOfCards = [pcard1, pcard2, pcard3, pcard4, pcard5, pcard6, pcard7, pcard8, pcard9, pcard10];

var deck = new Deck(deckOfCards);


window.onload = whenIStart();

cardArea.addEventListener("click", buttonConditionals);
playGameButton.addEventListener("click", advanceToRulesScreen);
playGameButton2.addEventListener("click", advanceToGameBoard);

function whenIStart() {
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
  createCardsOnDOM();
}

function createCardsOnDOM() {


  for (var i = 0; i < 3; i++) {
  document.querySelector(".row-1").innerHTML += `
   <div class="card card${deckOfCards[i].cardId}">
     <img class ="c${deckOfCards[i].cardId} card-back" src="./images/mario_card_back.jpg" alt="mario bricks">
     <img class ="c${deckOfCards[i].cardId} card-face" src=${deckOfCards[i].imageFront} alt="blue flower">
   </div>`
   }

   for (var i = 3; i < 7; i++) {
   document.querySelector(".row-2").innerHTML += `
    <div class="card card${deckOfCards[i].cardId}">
      <img class ="c${deckOfCards[i].cardId} card-back" src="./images/mario_card_back.jpg" alt="mario bricks">
      <img class ="c${deckOfCards[i].cardId} card-face" src=${deckOfCards[i].imageFront} alt="blue flower">
    </div>`
   }

    for (var i = 7; i <= 9; i++) {
    document.querySelector(".row-3").innerHTML += `
     <div class="card card${deckOfCards[i].cardId}">
       <img class ="c${deckOfCards[i].cardId} card-back" src="./images/mario_card_back.jpg" alt="mario bricks">
       <img class ="c${deckOfCards[i].cardId} card-face" src=${deckOfCards[i].imageFront} alt="blue flower">
     </div>`
   }
}

function moveToSelectedCards() {
  event.target.closest(".card");
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
  for (var i = 0; i < deck.cards.length; i++) {

    if (event.target.classList.contains(`c${i}`)) {
      document.querySelector(`.card${i}`).classList.toggle("flip");
    }
  }
}
