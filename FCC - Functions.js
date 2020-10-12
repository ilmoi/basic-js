// --------------------------------- FUNCTIONS
function reusableFunction() {
    console.log("Hi World!");
}

// arrow fns
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

// rest parameter - think *args, **kwargs in python
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
// can use reduce on them then:
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// ANONYMOUS function == no name, executed at the same time as defined
// (!) yes you need all the brackets/braces
(function() { console.log('yay'); })();
