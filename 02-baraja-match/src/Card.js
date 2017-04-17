import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {

  constructor(props) {
    super(props);

    this.state = { cardClass: '' };

    this.selectCard = this.selectCard.bind(this);
    this.isEqual = this.isEqual.bind(this);
    this.display = this.display.bind(this);
    this.hide = this.hide.bind(this);
  }

  centerCSS() {
    let css = ["center"];

    switch(this.props.count) {
      case 1: css.push("single"); break;
      case 2: css.push("two"); break;
      case 3: css.push("three"); break;
      case 4: css.push("four"); break;
      case 5: css.push("five"); break;
      case 6: css.push("six"); break;
      case 7: css.push("seven"); break;
      case 8: css.push("eight"); break;
      case 9: css.push("nine"); break;
      case 10: css.push("ten"); break;
    }

    if (this.props.image) 
      css.push("image")

    return css.join(' ');
  }

  suitsList() {
    let suits = [];
    for(let x=0; x < this.props.count; x++) 
    {
      suits.push(<div className="suit" key={x}> 
        { this.props.image ? 
          <img src={this.props.image} className="suitImage" />
          : this.props.suit
        }
      </div>)
    }
    return suits;
  }

  cardCSS() {
    return [this.props.color, "Card", this.state.cardClass].join(' ');
  }

  selectCard() {
    this.props.onCardSelect(this);
  }

  isEqual(otherCard) {
    if (this.props.label == otherCard.props.label && 
        this.props.suit == otherCard.props.suit) {
      return true;
    }
    return false;
  }

  display() {
    this.setState({ cardClass: 'display'});
    this.displayed = true;
  }

  hide() {
    this.setState({ cardClass: ''});
    this.displayed = false;
  }

  render() {
    return (
      <div className="card-container">
        <div className={this.cardCSS()} onClick={this.selectCard}> 
          <section className="front">
            <section className="corner left">
                <div className="label"> {this.props.label} </div>
                <div className="suit mini"> {this.props.suit} </div>
            </section>
            <section className={this.centerCSS()}>
              {this.suitsList()}
            </section>
            <section className="corner right upside-down">
                <div className="label"> {this.props.label} </div>
                <div className="suit mini"> {this.props.suit} </div>
            </section>
          </section>
          <section className="back">
          </section>
        </div>
      </div>
    );
  }
}
