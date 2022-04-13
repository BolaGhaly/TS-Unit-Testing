export function setUnionOfAnyAmountOfSets(...args: any) {
  let setUnionOfAnyAmountOfSets = new Set();
  let arrayOfArgs = [];
  for (let i = 0; i < args.length; i++) {
    arrayOfArgs.push(args[i]);
  }
  for (let i = 0; i < arrayOfArgs.length; i++) {
    for (let el of arrayOfArgs[i]) {
      setUnionOfAnyAmountOfSets.add(el);
    }
  }
  return setUnionOfAnyAmountOfSets;
}
