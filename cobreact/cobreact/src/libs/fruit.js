export const generateFruitLocation = (grid, trail) => {
    const position = {
        x: Math.floor(Math.random() * grid.width), 
        y: Math.floor(Math.random() * grid.height),
    }

    return position;
}