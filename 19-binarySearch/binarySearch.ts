class MySolution {
  binarySearch(nums: number[], target: number): any {
    var length = nums.length;
    var midPoint = Math.floor(length / 2);
    var newArr = nums;
    if (nums[midPoint] > target) {
      var newArr = nums.slice(0, midPoint);
      return this.binarySearch(newArr, target);
    } else if (nums[midPoint] < target) {
      var newArr = nums.slice(midPoint + 1, nums.length);
      return this.binarySearch(newArr, target);
    } else if (nums[midPoint] === target) {
      return true;
    } else if (nums[midPoint] !== target) {
      return false;
    }
  }
}

export let StudentSolution = MySolution;
