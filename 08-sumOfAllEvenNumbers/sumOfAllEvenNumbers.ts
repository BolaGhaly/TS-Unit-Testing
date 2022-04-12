export function sumOfAllEvenNumbers(nums: number[]) {
  let countOfAllEvenNumbers = nums.filter((value) => value % 2 === 0).length;
  return countOfAllEvenNumbers;
}
