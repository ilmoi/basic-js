// --------------------------------- VARIABLES
// (!) Variables which are used WITHOUT the VAR keyword are automatically created in the global scope.
// which won't fly if you put "use strict" at the top of the file

// var scope: when you define var it is either global or local to a function. BUT NOT TO BLOCK / STATEMENT / EXPRESSION
// thus in below example, after executing the loop, i will be GLOBALLY available and have a value of 3
for (let i = 0; i < 3; i++)

// let/const scope: when you define let inside of block / statement / expression
// thus in below example, after executing the loop, i will NOT be globally available
for (let i = 0; i < 3; i++)

// can declare 2 variables at once
let admin, name; // can declare two variables at once

// const is used for 2 types of constants:
// 1 - those calculated at runtime = use camelCase
const pageLoadtime = 123;
// 2 - those whose value is known beforehand (actual constants) = use UPPERCASE
const COLOR_RED = "#F00";

// objects / arrays / functions assigned with consts are STILL MUTABLE
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let

// instead use "freeze" - once an obj is frozen you can't add/update/delete props from it
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed

// typeof variable
console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
