function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  const mid = Math.round(left + right / 2);
  let pass = 0;
  while (pass <= 3) {
    if (nums[mid] === target) {
      return mid;
    }
    console.log({ mid, right });
    if (nums[mid] < nums[left]) {
      nums = [...nums.slice(nums.length - right), ...nums.slice(right)];
      console.log({ nums, pass });
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }

    pass++;
  }
}

console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 7));
