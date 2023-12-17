function updateMatrix(mat: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < mat.length; i++) {
    result.push(new Array(mat[0].length).fill(0));
  }

  function searchZero(
    x: number,
    y: number,
    dist: number,
    visited: Set<string>
  ): number {
    const loc = `${x}${y}`;
    if (!visited.has(loc) && mat[x] && Number.isInteger(mat[x][y])) {
      const num = mat[x][y];
      if (num === 0) {
        return dist;
      }
      dist++;
      visited.add(loc);
      return Math.min(
        searchZero(x + 1, y, dist, visited),
        searchZero(x - 1, y, dist, visited),
        searchZero(x, y + 1, dist, visited),
        searchZero(x, y - 1, dist, visited)
      );
    }
    return Infinity;
  }

  for (let x = 0; x < mat.length; x++) {
    for (let y = 0; y < mat[x].length; y++) {
      result[x][y] = searchZero(x, y, 0, new Set());
    }
  }
  return result;
}

// console.log(
//   updateMatrix([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0],
//   ])
// );
// console.log(
//   updateMatrix([
//     [0, 0, 0],
//     [0, 1, 0],
//     [1, 1, 1],
//   ])
// );
// console.log(updateMatrix([[0], [0], [0], [0], [0]]));

console.log(
  updateMatrix([
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  ])
);
