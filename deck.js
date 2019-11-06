class Deck {
  constructor(cards) {
    this.cards = cards || [];
    this.shuffle();
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    return this.cards;
  }

  checkIfCardsMatch() {
    if (this.selectedCards[0].matchId === this.selectedCards[1].matchId) {
      return true;
    } else {
      return false;
    }
  }

  moveToMatched() {
     this.matchedCards.push(this.cards[i]);
  }

}
