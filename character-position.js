var letter = process.argv[2].split(' ').join('').toLowerCase();
console.log(letter);
var letterPosition = {};

function countLetter(word) {
  for (var i = 0; i < word.length; i++) {
    if (letterPosition[word[i]]) {
      letterPosition[word[i]].push(i);
    } else {
      letterPosition[word[i]] = [i];
    }
  }
  return letterPosition;
}

countLetter(letter);
console.log(letterPosition);
