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


// --------------------------------- Arrow Functions
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


// --------------------------------- Anonymous Functions
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


// ----------------------------- Closure
// "closure" = nested function that has access to variables defined inside of its parent

// the same idea as "nonlocal" in python or "static" in C
// Scope A
var myFunction = function () {
  // Scope B
  var name = 'Todd'; // defined in Scope B
  var myOtherFunction = function () {
    // Scope C: `name` is accessible here! This is "closure" in action!
  };
};

// returning a function
var sayHello = function (name) {
  var text = 'Hello, ' + name;
  return function () {
    console.log(text);
  };
};
sayHello('Todd'); // nothing happens, no errors, just silence...
var helloTodd = sayHello('Todd');
helloTodd(); // will call the closure and log 'Hello, Todd'

// closure and "this"
// takeaway: the inner function will refer to global window
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // <nav> element
  setTimeout(function () {
    console.log(this); // [object Window]
  }, 1000);
};
nav.addEventListener('click', toggleNav, false);

// to counter this we'd "cache" the reference to the "this" value
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  var that = this;
  console.log(that); // <nav> element
  setTimeout(function () {
    console.log(that); // <nav> element
  }, 1000);
};
nav.addEventListener('click', toggleNav, false);


// ----------------------------- Changing function scope
// we can forcefully change the scope of some function using .call() and .apply()
var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
  (function () {
    console.log(this); //will refer to links[i] as a result of using .call()
  }).call(links[i]);
}
// the 2 differ in how you pass them the args:
// .call(scope, arg1, arg2, arg3)
// .apply(scope, [arg1, arg2])
// otherwise they're the same in terms of immeidately invoking the funciton

// if we don't want to immediately invooke, we should use .bind
nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);

// (!) rememmber that:
// var = defined within a function's scope (can't go narrower)
// let, const = defined within a block's scope (Eg if, for, while, switch, only then function)


// ----------------------------- Making functions private / modules
// we can make a function private (inaccessible from global scope) by putting it inside another function
(function () {
  var myFunction = function () {
    // do some stuff here
  };
})();
myFunction(); // Uncaught ReferenceError: myFunction is not defined

// if we wanted to make it private, but accessible as a method we'd use "modules"
// modules wrap the factory in an IIFE (Immediately Invoked Function Expression)
var Module = (function () {
  return {
    myMethod: function () {console.log('myMethod has been called.');}
  };
})();
Module.myMethod(); // call module + methods

// combining the two:
var Module = (function () {
  var _privateMethod = function () {}; //start with an underscore!
  return {
    publicMethod: function () { "eg could access the private from inside the public one" }
  };
})();

// having multiple public functions in a single module:
var Module = (function () {
  var _privateMethod = function () {}; //start with an underscore!!
  var publicMethod = function () {};
  var anotherPublicMethod = function () {};
  return {publicMethod, anotherPublicMethod}; // returns the Object with public methods
})();
