class MySolution {
  countDownSum(num: number): number {
    return num === 1 ? 1 : num + this.countDownSum(num - 1);
  }
}

export let StudentSolution = MySolution;
