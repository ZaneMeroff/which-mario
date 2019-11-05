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
var player1Matches = 0;

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

window.onload = onPageLoad();

cardArea.addEventListener("click", buttonConditionals);
playGameButton.addEventListener("click", advanceToRulesScreen);
playGameButton2.addEventListener("click", advanceToGameBoard);

function onPageLoad() {
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

// function instanciateCards() {
//   var idNames = [ "a", "a", "b", "b", "c", "c", "d", "d", "e", "e"];
//   for (var i = 0; i < data.length; i++) {
//     var card = new Card(idNames[i], i);
//     deck
//   }
// }

function createCardsOnDOM() {
  for (var i = 0; i <= 9; i++) {
  document.querySelector(".card-area").innerHTML += `
   <div class="card card${deckOfCards[i].cardId}">
     <img class ="c${deckOfCards[i].cardId} card-back" src="./images/mario_card_back.jpg" alt="mario bricks">
     <img class ="c${deckOfCards[i].cardId} card-face" src=${deckOfCards[i].imageFront} alt="blue flower">
   </div>`
  }
}

function checkIfCardsMatch() {
  if (deck.selectedCards[0].matchId === deck.selectedCards[1].matchId) {
    player1Matches += 1;
    return true;
  } else {
    // pause for 3 seconds then flip back
    return false;
  }
}

function moveToSelectedCards(target) {
  if (deck.selectedCards.length >= 2) {
    deck.selectedCards = [];
    for (var i = 0; i < deck.cards.length; i++) {
    document.querySelector(`.card${i}`).classList.remove("flip");
    }
  }
  for (var i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].cardId === target) {
    deck.selectedCards.push(deck.cards[i]);
    }
  }
}

function buttonConditionals(event) {
if (deck.selectedCards.length === 2) {
  if (checkIfCardsMatch()) {
    makeMatchingCardsDissapear();
  }
}
  for (var i = 0; i < deck.cards.length; i++) {
    if (event.target.classList.contains(`c${i}`)) {
      moveToSelectedCards(i);
      document.querySelector(`.card${i}`).classList.toggle("flip");
    }
  }
}

// function checkIfYouWon() {
//   if (deck.matchedCards.length === 10) {
//     document.querySelector(".winner-message").classList.remove("hidden");
//   } else {
//     return;
//   }
// }

function makeMatchingCardsDissapear() {
  var target = deck.selectedCards[0].matchId;
  for (var i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].matchId === target) {
       var cardId = deck.cards[i].cardId;
       document.querySelector(`.card${cardId}`).classList.add("hidden");
       deck.matchedCards.push(deck.cards[i]);
       upDateP1Score();
    }
  }
  deck.selectedCards = [];
}

function displayYouWin() {
  if (deck.matchedCards.length === deck.cards.length) {
    alert("YOU WIN!");
    // document.querySelector(".winner-message").classList.remove("hidden");
  }
}
