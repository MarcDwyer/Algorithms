function majorityElement(nums: number[]): number {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}

console.log(majorityElement([3, 2, 3]));
