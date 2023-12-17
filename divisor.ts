function smallestDivisor(nums: number[], threshold: number): number {
  let left = 0;
  let right = Math.max(...nums) + 1;

  let min = right;

  while (left <= right) {
    const divisor = Math.round((left + right) / 2);

    let sum = 0;

    for (const num of nums) {
      const res = Math.ceil(num / divisor);
      sum += Math.ceil(num / divisor);
    }

    if (sum <= threshold) {
      min = Math.min(divisor, min);
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return min;
}

// console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
