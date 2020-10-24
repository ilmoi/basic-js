// following this - https://github.com/airbnb/javascript
// only writing stuff I DONT know


// -----------------------------------------------------------------------------
// 3.4 if an obj has property value == key, use this shorthand:
// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};

// -----------------------------------------------------------------------------
// 3.5 and group shortcuts in the beginning
// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

// -----------------------------------------------------------------------------
// 3.6 only put quotes around keys where you MUST
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};

// -----------------------------------------------------------------------------
// 3.7 do not call Object.prototype methods on obj directly - call them on prototype
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));


// -----------------------------------------------------------------------------
// 5.2 use array destructuring where possible
// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;

// -----------------------------------------------------------------------------
// 5.3 use object destructuring, not array destructuring for multiple return values
// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);

// -----------------------------------------------------------------------------
// 6.4 NEVER USE EVAL!!!!

// -----------------------------------------------------------------------------
// 7.5 never name a parameter "arguments"
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}

// -----------------------------------------------------------------------------
// 7.7 use default parameter syntax, rather than mutating arguments
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}

// -----------------------------------------------------------------------------
// 7.13 NEVER MUTATE OR REASSIGN ORIGINAL PASSED IN PARAMS
// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}

// -----------------------------------------------------------------------------
// 7.14 this is how you apply a function to each element in an array:
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);


// -----------------------------------------------------------------------------
// 8.2 - when using =>, if fits on 1 line and no side effects then omit the return, otherwise include it
// bad
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});


// -----------------------------------------------------------------------------
// 8.4 always include () around single arguments to =>
// bad
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map((x) => x * x);


// -----------------------------------------------------------------------------
// 8.5 avoid confusing arrow syntax with <= and >= operators
// bad
const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) => item.height >= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = (item) => (item.height <= 256 ? item.largeSize : item.smallSize);


// -----------------------------------------------------------------------------
// methods can return "this" to help with chaining
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()


// -----------------------------------------------------------------------------
// classes have a default constructor if one is not specified.
// An empty construcotr / one that delegates to parent == unnecessary.
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}


// -----------------------------------------------------------------------------
// 9.7 - class methods should EITHER USE THIS, or BE STATIC.
// bad
class Foo {
  bar() {
    console.log('bar');
  }
}

// good - this is used
class Foo {
  bar() {
    console.log(this.bar);
  }
}

// good - constructor is exempt
class Foo {
  constructor() {
    // ...
  }
}

// good - static methods aren't expected to use this
class Foo {
  static bar() {
    console.log('bar');
  }
}


// -----------------------------------------------------------------------------
// 10.1 always use import/export + {}
// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;


// -----------------------------------------------------------------------------
// 10.3 do not export directly from an import
// bad
// filename es6.js
export { es6 as default } from './AirbnbStyleGuide';

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;


// -----------------------------------------------------------------------------
// 10.4 all imports from one file should happen on one and the same line
import foo, { named1, named2 } from 'foo';


// -----------------------------------------------------------------------------
// 10.5 do not export mutable bindings
// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };


// -----------------------------------------------------------------------------
// 10.9 disallow webpack loader syntax in moude import statements
// bad
import fooSass from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSass from 'foo.scss';
import barCss from 'bar.css';


// -----------------------------------------------------------------------------
// 11.1 Use forEach(), map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays,
// and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects.
// avoid directly typing iterator loops (eg "for-in", "for-of")
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map((num) => num + 1);


// -----------------------------------------------------------------------------
// generators in JS act like in Python
// syntax = * in front of the name
function *generator() {
    //generate
    yield answer;
}

// 11.2 DO NOT USE THEM IN JAVASCRIPT.


// -----------------------------------------------------------------------------
// 12.3 use ** for exponential calc - like in Python
// bad
const binary = Math.pow(2, 10);

// good
const binary = 2 ** 10;


// -----------------------------------------------------------------------------
// 13.5 DO NOT CHAIN VARIABLE ASSIGNMENTS
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError


// -----------------------------------------------------------------------------
// 13.5 DO NOT USE UNARY INCREMENTS = i++, i--. Use i+=1, i-=1


// -----------------------------------------------------------------------------
// 14.2 anonymous function assignments hoist their variable name, but not the function assignment
function example() {
  console.log(anonymous); // => undefined

  anonymous(); // => TypeError anonymous is not a function

  var anonymous = function () {
    console.log('anonymous function expression');
  };
}


// -----------------------------------------------------------------------------
// 14.3 named function assignments hoist their variable name, NOT the function name, NEITHER the function declaration
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying');
  };
}

// the same is true when the function name
// is the same as the variable name.
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  };
}


// -----------------------------------------------------------------------------
// 15.6 ternaries should not be nested and generally should be single-line expressions
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;


// -----------------------------------------------------------------------------
//16.1 use braces with multi-line but not single-line blocks
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function foo() { return false; }

// good
function bar() {
  return false;
}


// -----------------------------------------------------------------------------
// 17.2 don't use selection operators in place of control statements
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
  startRunning();
}


// -----------------------------------------------------------------------------
// don't add spaces inside of [] or (), but do add spaces inside of { x:x }
// key-value spacing should look like this:
var obj = { foo: 42 };


// -----------------------------------------------------------------------------
// YES TO TRAILING COMMAS!!!


// -----------------------------------------------------------------------------
// 22.2 coerce into a string using Strinb() only
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);


// -----------------------------------------------------------------------------
//22.3 use Number() or paseInt() with a radix
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);


// -----------------------------------------------------------------------------
//here's how you leave multipline comments

// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
const val = inputValue >> 0;


// -----------------------------------------------------------------------------
// convert to boolean like this
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;


// -----------------------------------------------------------------------------
// 23.5 - dont save references to this
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}


// -----------------------------------------------------------------------------
// 23.6 - a base filename should EXACTLY (including capitalization) match the name of its default export
// ++ export functions in camelCase, export classes/constructors in PascalCase

// file 1 contents
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad
import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js


// -----------------------------------------------------------------------------
// 24.1 - don't write getters / setters UNLESS YOU HAVE A REASON
// 24.2 - if you must, then write them like this:
// bad
class Dragon {
  get age() {
    // ...
  }

  set age(value) {
    // ...
  }
}

// good
class Dragon {
  getAge() {
    // ...
  }

  setAge(value) {
    // ...
  }
}


// -----------------------------------------------------------------------------
