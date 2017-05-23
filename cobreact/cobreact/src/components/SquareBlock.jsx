import React, { Component } from 'react';

import './SquareBlock.css';

const SquareBlock = ({ color }) => (
  <div className="square-block" style={{ backgroundColor: color }} />
)

SquareBlock.propTypes = {
  color: React.PropTypes.string.isRequired
}

export default SquareBlock;

