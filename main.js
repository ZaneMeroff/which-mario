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
var startNewGameButton = document.querySelector(".start-new-game-button");
var player1Matches = 0;
var winningMessage = "";
var startTime = 0;

function instanciateCards() {
  var deckOfCards = [];
  var idNames = [ "a", "a", "b", "b", "c", "c", "d", "d", "e", "e"];
  for (var i = 0; i < idNames.length; i++) {
    var card = new Card ({cardId:i, matchId:idNames[i], imageFront:`./images/card_0${(Math.floor(i/2)+1)}.png`});
    deckOfCards.push(card);
  }
  return deckOfCards;
}

var deck = new Deck(instanciateCards());

window.onload = onPageLoad();

startNewGameButton.addEventListener("click", startNewGame);
cardArea.addEventListener("click", buttonConditionals);
playGameButton.addEventListener("click", advanceToRulesScreen);
playGameButton2.addEventListener("click", advanceToGameBoard);

function startNewGame() {
  deck = new Deck(instanciateCards());
  document.querySelector(".card-area").innerHTML = "";
  advanceToGameBoard();
  player1Matches = 0;
  upDateP1Score();
}

function onPageLoad() {
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.add("hidden");
  p1ErrorMessage.classList.add("hidden");
  playGameButton.classList.add("disabled");
  upDateP1Score();
}

function upDateP1Score() {
  document.querySelector(".p1-score").innerHTML = player1Matches;
}

function advanceToRulesScreen() {
  if (!inputPlayer1.value) {
    p1ErrorMessage.classList.remove("hidden");
  } else {
    addPlayersScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
    p1span.innerHTML = inputPlayer1.value;
  }
}

function advanceToGameBoard() {
  startTime = Date.now();
  p1name.innerHTML = inputPlayer1.value;
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.remove("hidden");
  header.classList.add("hidden");
  createCardsOnDOM();
}

function createCardsOnDOM() {
  document.querySelector(".card-area").innerHTML = "";
  for (var i = 0; i < deck.cards.length; i++) {
  document.querySelector(".card-area").innerHTML += `
   <div class="card card${deck.cards[i].cardId} grid${i}">
     <img class ="c${deck.cards[i].cardId} card-back" src="./images/mario_card_back.jpg" alt="mario bricks">
     <img class ="c${deck.cards[i].cardId} card-face" src=${deck.cards[i].imageFront} alt="blue flower">
   </div>`
  }
}

function checkIfCardsMatch() {
  if (deck.selectedCards[0].matchId === deck.selectedCards[1].matchId) {
    player1Matches += 1;
    return true;
  } else {
    return false;
  }
}

function checkResetBoard() {
  if (deck.selectedCards.length >= 2) {
    if (checkIfCardsMatch()) {
      setTimeout(makeMatchingCardsDissapear, 2000);
    } else {
      setTimeout(resetBoard, 2000);
    }
  }
}

function resetBoard() {
  deck.selectedCards = [];
  for (var i = 0; i < deck.cards.length; i++) {
  document.querySelector(`.card${i}`).classList.remove("flip");
  }
}

function moveToSelectedCards(target) {
  for (var i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].cardId === target) {
      if (deck.selectedCards.length === 0 || deck.selectedCards[0].cardId !== target) {
        deck.selectedCards.push(deck.cards[i]);
      }
    }
  }
}

function buttonConditionals(event) {
  for (var i = 0; i < deck.cards.length; i++) {
    if (event.target.classList.contains(`c${i}`)) {
      moveToSelectedCards(i);
      document.querySelector(`.card${i}`).classList.toggle("flip");
    }
  }
  checkResetBoard();
}

function makeMatchingCardsDissapear() {
  var target = deck.selectedCards[0].matchId;
  for (var i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].matchId === target) {
       var cardId = deck.cards[i].cardId;
       document.querySelector(`.card${cardId}`).classList.add("hidden");
       deck.matchedCards.push(deck.cards[i]);
       upDateP1Score();
       displayYouWin();
    }
  }
  deck.selectedCards = [];
}

function timeOut(timeInMiliseconds) {
   var time = new Date().getTime();
   while (time + timeInMiliseconds >= new Date().getTime()) {
   }
}

function timeCheck() {
  var endTime = Date.now();
  var totalTime = (endTime - startTime) / 1000;
  var min = Math.floor(totalTime / 60);
  var sec = Math.round (totalTime % 60);
  winningMessage = `You finshed in ${min}min(s) and ${sec}sec(s)!`;
  return totalTime;
}

function displayYouWin() {
  if (deck.matchedCards.length === deck.cards.length) {
    var playersTime = timeCheck();
    document.querySelector(".card-area").innerHTML = `
    <p class="winner-message-l1">you win ${inputPlayer1.value}!</p>
    <p class="winner-message-l2">${winningMessage}</p>`
    localStorage.setItem(inputPlayer1.value, JSON.stringify(playersTime));
  }
}
