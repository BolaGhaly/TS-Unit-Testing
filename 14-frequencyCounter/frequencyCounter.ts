export function frequencyCounter(word: string) {
  var frequencyObject: any = {};
  for (var i = 0; i < word.length; i++) {
    var character = word.charAt(i);
    if (frequencyObject[character]) {
      frequencyObject[character]++;
    } else {
      frequencyObject[character] = 1;
    }
  }
  return frequencyObject;
}
