//concatening string into one sentence
let text = "This is a very nice day";
text += " and its also very hot";

console.log(text);

//tricks and vital

console.log(10 / 2);

let x = 10;

x **= 5;

console.log(x);

//using double quotes inside a single quote
console.log('he is very much a "punk"');

function toCelcius(number) {
  return (5 / 9) * number - 32;
}

console.log(toCelcius(100));

//capitalize the first character in a sentence

let myText = "hello world of javascript";

const capSentence = myText.charAt(0).toUpperCase() + myText.slice(1);

console.log(capSentence);

//reversing a string of a sentence!

const reverseSentence = myText.split("").reverse().join("");
console.log(reverseSentence);

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(-12, -6);
console.log(part);

//Template literal strings with back ticks
let text2 = `The quick
brown fox
jumps over the lazy
dog`;

//use the $ symbol for variable strings:
let firstName = "Robert";
let lastName = "Abongo";
let fullDetails = `Welcome ${firstName}, ${lastName}`;

console.log(fullDetails);

//Expressions are allowed in template strings:
let price = 10;
let VAT = 0.25;

let total = `Total: ${price * (1 + VAT).toFixed(2)}`;

console.log(total);
