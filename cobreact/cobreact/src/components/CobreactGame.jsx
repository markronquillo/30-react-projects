import React, { Component } from 'react';
import { connect } from 'react-redux';

import Jungle from './Jungle';
import ScorePanel from './ScorePanel';

import { generateEmptyGrid } from '../libs/grid';

import * as actions from '../actions/index';

import { UP, DOWN, LEFT, RIGHT } from '../constants/keys';
import * as directions from '../constants/directions';


export class CobreactGame extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyDown(e) {
    console.log(e);
    console.log(this.props.direction);
    switch(e.keyCode) {
      case UP:
        if (this.props.direction != directions.DOWN)
          this.props.moveTo(directions.UP);
        break;
      case DOWN:
        if (this.props.direction != directions.UP)
          this.props.moveTo(directions.DOWN);
        break;
      case LEFT:
        if (this.props.direction != directions.RIGHT)
          this.props.moveTo(directions.LEFT);
        break;
      case RIGHT:
        if (this.props.direction != directions.LEFT)
          this.props.moveTo(directions.RIGHT);
        break;
    }
  }

  render() {
    return (
      <div>
        <ScorePanel />
        <Jungle grid={this.props.grid} />    
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    grid: state.game.grid,
    direction: state.game.direction
  }
}

const mapDispatchToProps = (dispatch) => ({
  moveTo: (direction) => dispatch(actions.move(direction))
})

export default connect(mapStateToProps, mapDispatchToProps)(CobreactGame);