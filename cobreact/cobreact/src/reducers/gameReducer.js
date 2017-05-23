import initialState from './initialState';
import { generateFruitLocation } from '../libs/fruit';

const reducers = {
  ADVANCE: (state, action) => {
    const {
      grid,
      fruit
    } = state;

    let trail = [...state.trail];
    const nextHead = {
        x: state.head.x + state.direction.x,
        y: state.head.y + state.direction.y
    };

    // make sure the snake is not displayed out of bounds
    if (nextHead.x >= grid.width) {
      nextHead.x = 0;
    } else if (nextHead.x < 0) {
      nextHead.x = grid.width - 1;
    }
    if (nextHead.y >= grid.height) {
      nextHead.y = 0;
    } else if (nextHead.y < 0) {
      nextHead.y = grid.height - 1;
    }
    trail.push(nextHead);

    // always remove one square block for every game loop
    // except when the snake eats the fruit
    let snakeLength = state.snakeLength;
    let nextFruit = fruit;
    if (nextHead.x == fruit.x && nextHead.y == fruit.y) {
      snakeLength += 1;
      nextFruit = generateFruitLocation(grid, trail)
    }

    if (trail.length > state.snakeLength) {
        trail.shift()
    }

    return {
        ...state,
        trail,
        snakeLength,
        fruit: nextFruit,
        head: nextHead
    }
  },

  MOVE: (state, action) => {
      return {
          ...state, 
          direction: action.direction
      };
  },

  START: (state, action) => {
    return state;
  },
  PAUSE: (state, action) => {
    return state;
  },
  RESUME: (state, action) => {
    return state;
  }
}

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState.game;
  }

  return action.type in reducers ? 
    reducers[action.type](state, action) : 
    state;
}
