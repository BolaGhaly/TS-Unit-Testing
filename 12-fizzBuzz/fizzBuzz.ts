export function fizzBuzz(start: number, end: number) {
  let fizzBuzzArr: any[] = [];

  for (let i = 0; i <= end - start; i++) {
    fizzBuzzArr[i] = start + i;
  }
  
  for (let i = 0; i < fizzBuzzArr.length; i++) {
    if (fizzBuzzArr[i] % 3 !== 0 && fizzBuzzArr[i] % 5 !== 0) {
      fizzBuzzArr[i] = fizzBuzzArr[i];
    } else if (fizzBuzzArr[i] % 3 === 0 && fizzBuzzArr[i] % 5 === 0) {
      fizzBuzzArr[i] = "FizzBuzz";
    } else if (fizzBuzzArr[i] % 3 === 0 && fizzBuzzArr[i] % 5 !== 0) {
      fizzBuzzArr[i] = "Fizz";
    } else if (fizzBuzzArr[i] % 3 !== 0 && fizzBuzzArr[i] % 5 === 0) {
      fizzBuzzArr[i] = "Buzz";
    }
  }

  return fizzBuzzArr;
}
