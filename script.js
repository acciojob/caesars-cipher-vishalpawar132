// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    const decodedChar = lookup[char] || char; // Lookup decoded character or use the original character if not found
    decodedArr.push(decodedChar);
  }

  return decodedArr.join(""); // Join the decoded characters into a string
}

// Testing the function with the given input
console.log(rot13("SERR YBIR? NPPVBWBO")); // Output: "FREE LOVE? ACCCCCCOB"

// Exporting the function for testing purposes
module.exports = rot13;