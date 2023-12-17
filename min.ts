function findMin(nums: number[]): number {
  let right = nums.length - 1;
  let left = 0;

  let min = Number.MIN_SAFE_INTEGER;

  do {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  } while (left < right);

  return min;
}
