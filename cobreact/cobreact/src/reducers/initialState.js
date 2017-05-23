import { RIGHT } from '../constants/directions';

import { generateFruitLocation } from '../libs/fruit';

const grid = { width: 40, height: 30 };

export default {
    game: {
        fruit: generateFruitLocation(grid, []),
        grid,
        snakeLength: 5,
        trail: [],
        head: {x: 2, y: (grid.height / 2) - 2},
        direction: RIGHT 
    }
}