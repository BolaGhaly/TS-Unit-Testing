export function countOfAllNumbersSmallerThanTarget(
  nums: Array<number>,
  target: number
) {
  let countOfNumbersSmallerThanTarget = nums.filter(
    (value) => value < target
  ).length;
  return countOfNumbersSmallerThanTarget;
}
