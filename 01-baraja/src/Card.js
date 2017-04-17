import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {

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
    return [this.props.color, "Card"].join(' ');
  }

  render() {
    return (
      <div className={this.cardCSS()}> 
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
      </div>
    );
  }
}
