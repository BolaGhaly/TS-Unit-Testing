export function productOfAnyAmountOfNumbers(...args: number[]) {
  let productOfAnyAmountOfNumbers = 1;
  for (let i = 0; i < args.length; i++) {
    productOfAnyAmountOfNumbers *= args[i];
  }

  return productOfAnyAmountOfNumbers;
}
