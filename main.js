// Main Functions
const instanciateCards = () => {
  let deckOfCards = [];
  let idNames = [ "a", "a", "b", "b", "c", "c", "d", "d", "e", "e"];
  for (let i = 0; i < idNames.length; i++) {
    let card = new Card ({
      cardId: i,
      matchId: idNames[i],
      imageFront: `./images/card_0${(Math.floor(i / 2) + 1)}.png`
    });
    deckOfCards.push(card);
  }
  return deckOfCards;
}

const startNewGame = () => {
  deck = new Deck(instanciateCards());
  document.querySelector(".card-area").innerHTML = "";
  advanceToGameBoard();
  player1Matches = 0;
  upDateP1Score();
}

const onPageLoad = () => {
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.add("hidden");
  p1ErrorMessage.classList.add("hidden");
  playGameButton.classList.add("disabled");
  upDateP1Score();
}

const upDateP1Score = () => {
  document.querySelector(".p1-score").innerHTML = player1Matches;
}

const advanceToRulesScreen = () => {
  if (!inputPlayer1.value) {
    p1ErrorMessage.classList.remove("hidden");
  } else {
    addPlayersScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
    document.querySelector(".p1-span").innerHTML = inputPlayer1.value;
  }
}

const advanceToGameBoard = () => {
  startTime = Date.now();
  document.querySelector(".p1-name").innerHTML = inputPlayer1.value;
  rulesScreen.classList.add("hidden");
  gamePlayContainer.classList.remove("hidden");
  header.classList.add("hidden");
  createCardsOnDOM();
}

const createCardsOnDOM = () => {
  document.querySelector(".card-area").innerHTML = "";
  for (let i = 0; i < deck.cards.length; i++) {
    document.querySelector(".card-area").innerHTML += `
   <div class="card card${deck.cards[i].cardId} grid${i}">
     <img class ="c${deck.cards[i].cardId} card-back"
     src="./images/mario_card_back.jpg" alt="mario bricks">
     <img class ="c${deck.cards[i].cardId} card-face"
     src=${deck.cards[i].imageFront} alt="blue flower">
   </div>`
  }
}

const checkResetBoard = () => {
  if (deck.selectedCards.length >= 2) {
    if (deck.checkIfCardsMatch()) {
      player1Matches += 1;
      setTimeout(makeMatchingCardsDissapear, 2000);
    } else {
      setTimeout(resetBoard, 2000);
    }
  }
}

const resetBoard = () => {
  deck.selectedCards = [];
  for (let i = 0; i < deck.cards.length; i++) {
    document.querySelector(`.card${i}`).classList.remove("flip");
  }
}

const moveToSelectedCards = (target) => {
  for (let i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].cardId === target) {
      if (deck.selectedCards.length === 0 ||
        deck.selectedCards[0].cardId !== target) {
        deck.selectedCards.push(deck.cards[i]);
      }
    }
  }
}

const buttonConditionals = (event) => {
  for (let i = 0; i < deck.cards.length; i++) {
    if (event.target.classList.contains(`c${i}`)) {
      moveToSelectedCards(i);
      document.querySelector(`.card${i}`).classList.toggle("flip");
    }
  }
  checkResetBoard();
}

const makeMatchingCardsDissapear = () => {
  let target = deck.selectedCards[0].matchId;
  for (let i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].matchId === target) {
      let cardId = deck.cards[i].cardId;
      document.querySelector(`.card${cardId}`).classList.add("hidden");
      deck.matchedCards.push(deck.cards[i]);
      upDateP1Score();
      displayYouWin();
    }
  }
  deck.selectedCards = [];
}

const timeCheck = () => {
  let endTime = Date.now();
  let totalTime = (endTime - startTime) / 1000;
  let min = Math.floor(totalTime / 60);
  let sec = Math.round (totalTime % 60);
  winningMessage = `You finshed in ${min}min(s) and ${sec}sec(s)!`;
  return totalTime;
}

const displayYouWin = () => {
  if (deck.matchedCards.length === deck.cards.length) {
    let playersTime = timeCheck();
    document.querySelector(".card-area").innerHTML = `
    <p class="winner-message-l1">you win ${inputPlayer1.value}!</p>
    <p class="winner-message-l2">${winningMessage}</p>`
    localStorage.setItem(inputPlayer1.value, JSON.stringify(playersTime));
  }
}

// Gloval letiables
let addPlayersScreen = document.querySelector(".add-players-screen");
let rulesScreen = document.querySelector(".rules-screen");
let header = document.querySelector("header");
let gamePlayContainer = document.querySelector("section");
let inputPlayer1 = document.querySelector(".input-player-1");
let playGameButton = document.querySelector(".play-game-button");
let p1ErrorMessage = document.querySelector(".p1-error-message");
let playGameButton2 = document.querySelector(".play-game-button2");
let player1Matches = 0;
let winningMessage = "";
let startTime = 0;
let deck = new Deck(instanciateCards());

// On Window Load
window.onload = onPageLoad();

// Event Listeners
document.querySelector(".start-new-game-button")
  .addEventListener("click", startNewGame);
document.querySelector(".card-area")
  .addEventListener("click", buttonConditionals);
playGameButton.addEventListener("click", advanceToRulesScreen);
playGameButton2.addEventListener("click", advanceToGameBoard);
