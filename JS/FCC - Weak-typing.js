// --------------------------------- WEAK TYPING
// js not hard-typed (unlike python), so the below will work
var x = "100";
var y = "10";
var z = x * y; // z will be 1000

// infinity
x = Infinity;
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

// comverting to string using bases
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10

// numbers can be ojects
var x = 500;             //number
var y = new Number(500); //object (bad, slows down execution speed)
// (x === y) is false because x and y have different types

// chaining is legal
a = b = c = 2 + 2;

// comma operator -
// (!) has a very low precedence - lower than "=", so () are important
let a = (1 + 2, 3 + 4); // 1+2 is thrown away and 3+4=7 is returned
let a = 1 + 2, 3 + 4 //evaluates to 1+2=3, a=3, rest thrown away (hence () important)
// how it's actually used: can be used to put several actions into line
for (a = 1, b = 3, c = a * b; a < 10; a++)

// "modify in place" operators such as += are low in precedence too
// hence this produces 16, not 11
let n = 2;
n *= 3 + 5;

// increment / decrement
// two forms:
let c = ++a; // "prefix form" == returns new (incremented) value
let d = b++; // "postfix form" == returns old value
// precedence is high
let counter = 1;
( 2 * ++counter ); // 4

// more peculiarities because JS is weakly-typed
"" + 1 + 0 = "10" // converts 1 to string, then 0 to string
"" - 1 + 0 = -1 // minus can't be used with strings, so converts to int
true + false = 1 //converts both to numbers
true + true = 2 //converts both to numbers
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px" //does addition then converts to string
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN //- doesn't work with strings, so it fails. if was + we'd get 4px2
7 / 0 = Infinity //unlike in python: ZeroDivisionError: division by zero
"  -9  " + 5 = "  -9  5" //takes the type of first one == str
"  -9  " - 5 = -14 // forced to take type of latter coz can't do - with strings
null + 1 = 1 // unlike in python: TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'
undefined + 1 = NaN
" \t \n" - 2 = -2 // again, - not suppported for strings, so we take the second type and the first value becomes 0

// easy way to cast a string to an int - PUT PLUS SIGN IN FRONT
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);
alert(a + b); // 3
