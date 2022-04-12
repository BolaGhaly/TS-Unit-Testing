export function sumOfNumsWithinARange(
  nums: number[],
  start: number,
  end: number
) {
  let countOfNumsWithinARange = nums.filter(
    (value) => start <= value && value <= end
  ).length;
  return countOfNumsWithinARange;
}
