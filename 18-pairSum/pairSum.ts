export function pairSum(nums: number[], target: number) {
  if (nums.length <= 1) {
    throw "Error, the length of 'nums' array is 1 or lower";
  } else if (nums.length >= 2) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return true;
        }
      }
    }
    return false;
  }
}
