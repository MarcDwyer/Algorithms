function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const map = new Map();

  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }
  for (const [a, b] of prerequisites) {
    map.get(a).push(b);
  }

  const visited = new Set<number>();

  function findPath(course: number, path: number[]) {
    if (visited.has(course)) {
      return [];
    }
    visited.add(course);
    for (const prereq of map.get(course)) {
      findPath(prereq, path);
    }
    path.push(course);
  }
  const result: any[] = [];

  for (let i = 0; i < numCourses; i++) {
    const path = [];
    findPath(i, path);
    if (!path.length) {
      return [];
    }
    result.push(...path);
  }
  return result;
}
// console.log(
//   findOrder(4, [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ])
// );

// console.log(
//   findOrder(2, [
//     [0, 1],
//     [1, 0],
//   ])
// );
console.log(findOrder(2, []));

// console.log(findOrder(2, [[0, 1]]));
