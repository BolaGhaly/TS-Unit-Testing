export function countOfAllBooleans(arr: Array<any>) {
  let booleansCount = arr.filter(value => value === true || value === false).length;
  return booleansCount;
}
