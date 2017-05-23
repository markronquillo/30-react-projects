export function generateEmptyGrid(rows, cols) {
  const matrix = [];

  for (let row = 0; row < rows; row++) {
    matrix[row] = [];
    for (let col = 0; col < cols; col++) {
      matrix[row][col] = null;
    }
  }
  return matrix;
}