/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/

function charactersNotQuiteAtTheEdge(str) {
  let char1 = str[1];
// For any string input used we want the second-to-last character.
  let char2 = str[str.length - 2];
// To ensure concatenation of characters as strings we should convert char1 and char2 to strings.
  return char1.toString() + char2.toString();
}

//console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
