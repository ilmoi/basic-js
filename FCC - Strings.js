// --------------------------------- STRINGS
// find length
x.length // not .length() or len() aka python

// (!) in js strings are immutable - ie you can't do this
var myStr = "Bob";
myStr[0] = "J"; //error
myStr = "Job"; //works

// reverse indexing
myStr[-1] //fails
myStr[myStr.length - 1] //works

// string interpolation syntax
// (!) note we use BACKTICKS
const name = 'ilja';
console.log(`my name is ${ilja}`);

// reverse a string
str.split('').reverse().join('');
str.split(/\W/) //splits based on any punctuation character
