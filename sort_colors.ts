function sortColors(nums: number[]): any {
  let left = 0;
  let right = nums.length - 1;

  let curr = 0;

  function swap(a: number, b: number) {
    if (a !== b) {
      const prevA = nums[a];
      nums[a] = nums[b];
      nums[b] = prevA;
    }
  }

  do {
    if (nums[curr] === 0) {
      swap(curr, left);
      left++;
      curr++;
    } else if (nums[curr] === 2) {
      swap(curr, right);
      right--;
    } else {
      curr++;
    }
  } while (curr < right);
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// 0, 1, 2
// red, white, blue
