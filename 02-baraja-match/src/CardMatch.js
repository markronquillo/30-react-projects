import React, { Component } from 'react';
import Card from './Card';
import data from './card_data';

export default class CardMatch extends Component {
  constructor(props) {
    super(props);
    this.cards = data;
    this.card1 = null;
    this.card2 = null;

    this.generateRandomCardSet = this.generateRandomCardSet.bind(this);
    this.onCardSelect = this.onCardSelect.bind(this);

    this.state = {
      tries: 0,
      data: this.generateRandomCardSet(),
    }
  }

  /**
   * Shuffles the given array
   * Uses fisher-yates algorithm
   * @param  {Array} cards array of card objects
   * @return {Array}       shuffled array of card objects
   */
  shuffle(cards) {
    let m = cards.length - 1;
    while(m) {
      const r = Math.floor(Math.random() * m--);
      const tmp = cards[m]
      cards[m] = cards[r]
      cards[r] = tmp
    }
    return cards;
  }

  /**
   * Generate random card set for the game
   * @return array of Cards
   */
  generateRandomCardSet() {
    // clone card list
    let cards = this.cards.slice()
    // shuffle cards
    cards = this.shuffle(cards)
    // pick n number of cards then duplicate
    const tmp = cards.slice(0, 20)
    return this.shuffle(tmp.concat(tmp.slice()))
  }

  /**
   * This will be triggered on card click.
   * @param  Card card 
   * @return none
   */
  onCardSelect(card) {
    // ignore if card is already displayed
    if (card.displayed) return;

    if (this.card1 === null) {
      this.card1 = card;
      this.card1.display();
      return;
    }
    this.card2 = card;
    this.card2.display();

    const self = this;
    const card1 = this.card1;
    const card2 = this.card2;

    self.card1 = null;
    self.card2 = null;
    
    setTimeout(function() {
      if (card1.isEqual(card2)) {
      } else {
        card1.hide();
        card2.hide();
      }
      self.setState({ tries: self.state.tries+1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <section className="controls">
          <button> New Game </button>
          <span> No of tries: { this.state.tries } </span>
        </section>
        <div className="cardsWrap">
          {this.state.data.map((card, index) => {
            return <Card onCardSelect={this.onCardSelect} key={index} {...card} />
          })}
        </div>
      </div>
    );
  }
}


