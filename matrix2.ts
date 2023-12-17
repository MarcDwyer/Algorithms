const getNeighbours = (row: number, column: number) => {
  return [
    [row - 1, column],
    [row, column + 1],
    [row + 1, column],
    [row, column - 1],
  ];
};

function updateMatrix(mat: number[][]): number[][] {
  const rows: number = mat.length;
  const columns: number = mat[0].length;
  const result: number[][] = Array(rows)
    .fill(0)
    .map((row) => Array(columns).fill(0));

  const checkClosestZero = (
    row: number,
    column: number,
    valueToAdd: number
  ) => {
    if (
      row >= rows ||
      row < 0 ||
      column >= columns ||
      column < 0 ||
      result[row][column] === 0 ||
      1 + valueToAdd >= result[row][column]
    )
      return;

    result[row][column] = 1 + valueToAdd;
    queue.push([row, column]);
  };

  const queue: number[][] = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        result[i][j] = rows * columns;
      }
    }
  }

  while (queue.length > 0) {
    const currCell = queue.shift();
    if (!currCell) {
      continue;
    }
    console.log({ currCell });
    const nextNeighbours = getNeighbours(currCell[0], currCell[1]);

    for (let neighbour of nextNeighbours) {
      checkClosestZero(
        neighbour[0],
        neighbour[1],
        result[currCell[0]][currCell[1]]
      );
    }
  }

  return result;
}
