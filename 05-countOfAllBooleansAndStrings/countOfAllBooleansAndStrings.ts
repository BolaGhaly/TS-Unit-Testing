export function countOfAllBooleansAndStrings(arr: Array<any>) {
  let booleansAndStringsCount = arr.filter(
    (value) => value === true || value === false || typeof value === "string"
  ).length;
  return booleansAndStringsCount;
}
