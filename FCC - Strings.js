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

// find first occurence
str.indexOf("locate", 15); //15 = start position

// find last occurence
str.lastIndexOf("locate");

// find the position of a match
// (!) diff with indexOf:
// 1 The search() method cannot take a second start position argument.
// 2 The indexOf() method cannot take powerful search values (regular expressions).
var pos = str.search("locate");

// ------------------

// there are 3 methods for extracting a part of a string:
// 1 extracts and returns extracted part
str.slice(start, end)
str.slice(-12, -6); //negatives allow us to count from the rear end
str.slice(7); //omit the 2nd == count to the end of the string

// 2 substring similar to slice - but can't accept negative params
substring(start, end)

// 3 also similar to slice but 2nd param specifies the length of the extracted part
substr(start, length)

// concat can be used instead of plus operator
text3 = text1.concat(" ", text2);

// remove extra whitespace
var str = "       Hello World!        ";
str.trim();

// ------------------

// there are 3 methods for extracting string characters
// 1 charAt
var str = "HELLO WORLD";
str.charAt(0);            // returns H

// 2 charCodeAt - records the unicode of the character in that position (an integer between 0 and 65535).
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

// 3 simple property access
var str = "HELLO WORLD";
str[0];                   // returns H
