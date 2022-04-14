export function isAnagram(str1: string, str2: string) {
  return cleanString(str1) === cleanString(str2);
}

function cleanString(str: string) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}
