// --------------------------------- FUNCTIONS
function reusableFunction() {
    console.log("Hi World!");
}

// rest parameter - think *args, **kwargs in python
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
// can use reduce on them then:
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// never add a new line between RETURN and the actual value
return; //js will assume a ; here and your function will return "undefined"
 (some + long + expression + or + whatever * f(a) + f(b))


// ---------------------------------
// ARROW FUNCTIONS
// TLDR: allows us to skip "function" and "return"
// fnName = (param1, param2, paramN) => expression
// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6 (more than one expression)
const multiplyES6 = (x, y) => {
    console.log('yay');
    return x * y
};

// ES6 (one expression) (starts to look like lambda in python)
const multiplyES6 = (x, y) => x * y;

// 1 param = no need to use () at all
const squareES6 = x => x * x;

// 0 params = use ()
const rabdomES6 = () => Math.random();

// return an object:
//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};
// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

// when to use arrow functions
// 1 Use FUNCTION in the 1)global scope and for 2)Object.prototype properties.
// 2 Use CLASS for object constructors.
// 3 Use => everywhere else.
// explained why: https://stackoverflow.com/questions/22939130/when-should-i-use-arrow-functions-in-ecmascript-6`

// handling of 'this' is different between arrow and regular functions:
// 1 In reg functions, 'this' keyword represents the object that CALLED the fn
// 2 In arrow functions, 'this' keyword represents the object that DEFINED the fn
// explained here - https://www.w3schools.com/js/js_arrow_function.asp


// ---------------------------------
// ANONYMOUS FUNCTIONS
// == no name, executed at the same time as defined
// how to use:
// 1 type them inside ()
(function() { console.log('yay'); })();

// 2 use with an event  handler (most frequent use case)
const myButton = document.querySelector('button');
myButton.onclick = function() {
  alert('hello');
}

// 3 assign to a variable (also called "function expressions")
const myGreeting = function() {
  alert('hello'); //note the semicolon. we put semicolons at the end of expressions, but not declarations (just like we don't put them after if, while, etc)
}

// more on function DECLARATIONS vs EXPRESSIONS
// declaration:
// 1 are hoisted
// 2 (in strict mode) only available inside the code block where they are defined
// 3 can NOT be used with arrow fns
function sayHi(name) {
  alert( `Hello, ${name}` );
}
// expression:
// 1 are NOT hoisted
// 2 we can define the varibale more globally, then write the function locally and it will be available - see https://javascript.info/function-expressions
// 3 can be used with arrow fns
let sayHi = function(name) {
  alert( `Hello, ${name}` );
};
