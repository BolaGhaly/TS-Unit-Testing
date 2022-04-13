export function isPalindrome(word: any) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      word = false;
      return word;
    } else if (word[i] === word[len - 1 - i]) {
      word = true;
    }
  }
  return word;
}
