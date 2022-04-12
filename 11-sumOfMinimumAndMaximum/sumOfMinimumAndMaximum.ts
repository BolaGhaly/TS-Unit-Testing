export function sumOfMinimumAndMaximum(nums: number[]) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  return min + max;
}
