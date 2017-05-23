import React, { Component } from 'react';
import { connect } from 'react-redux';

import SquareBlock from './SquareBlock';
import { SNAKE_COLOR, FRUIT_COLOR } from '../constants/colors';

import './Jungle.css';

export class Jungle extends Component {

  renderBlocks() {
    const blocks = [];
    const rows = this.props.grid.height;
    const cols = this.props.grid.width;
    const widthPercent = 100 / cols;
    const heightPercent = 100 / rows;
    let blockValue;

    for(let i=0; i < this.props.trail.length; i++) {
      const block = this.props.trail[i];
      const row = block.x; 
      const col = block.y; 
      let key = `${row}-${col}`;
      blocks.push(
        <li
          className="grid-square-block"
          key={key}
          style={{
            width: `${widthPercent}%`,
            height: `${heightPercent}%`,
            top: `${col * heightPercent}%`,
            left: `${row * widthPercent}%`
          }}
        >
          <SquareBlock color={SNAKE_COLOR} />
        </li>
      );
    }

    blocks.push(
      <li
        className="grid-square-block fruit"
        key="fruit"
        style={{
          width: `${widthPercent}%`,
          height: `${heightPercent}%`,
          top: `${this.props.fruit.y * heightPercent}%`,
          left: `${this.props.fruit.x * widthPercent}%`
        }}
      >
        <SquareBlock color={FRUIT_COLOR} />
      </li>
    );
    return blocks;
  }

  render() {
    return (
      <ul className="Jungle">
        {this.renderBlocks()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    trail: state.game.trail,
    head: state.game.head,
    fruit: state.game.fruit,
  }
}

export default connect(mapStateToProps)(Jungle);
