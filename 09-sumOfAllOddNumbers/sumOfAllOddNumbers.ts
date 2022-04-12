export function sumOfAllOddNumbers(nums: number[]) {
  let countOfAllOddNumbers = nums.filter((value) => value % 2 !== 0).length;
  return countOfAllOddNumbers;
}
