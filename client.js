//console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));

var wordArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];

var stringResult = '';// start with an empty string

// concatenate all of the words
for (var i = 0; i < wordArray.length; i++) {
  stringResult = stringResult + wordArray[i]; // add a word to the stringResult
}

console.log(stringResult);
