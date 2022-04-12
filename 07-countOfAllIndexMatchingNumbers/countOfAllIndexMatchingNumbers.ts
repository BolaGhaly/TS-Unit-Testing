export function countOfAllIndexMatchingNumbers(nums: number[]) {
  let countOfIndexMatchingNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      countOfIndexMatchingNumbers++;
    }
  }
  return countOfIndexMatchingNumbers;
}
