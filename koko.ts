function minEatingSpeed(piles: number[], h: number): number {
  let start = 1;
  let end = Math.max(...piles);

  let result = end;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      result = Math.min(mid, result);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8));
