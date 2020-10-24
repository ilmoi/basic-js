
// THIS DOC CONTAINS OUTDATED METHODS, BEFORE THE "CLASS" SYSTEM IN ES6

// --------------------------------- Create an object

// ways to create objects summary:
// 1a - object literal syntax (for one-off objects / dicts)
// 1b - new Object() - DONT USE (clumsy)
// 2a - object contructor - DONT USE (broken)
// 2b - factor functions - DONT USE (classes are newer / easier)
// 2c - class - NEW IN ES6, USE THIS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// 2d - prototypal inheritance - DONT USE (too complex for me for this stage)

// -------------------------
// 1a) to create a single object use "object literal syntax":
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// -------------------------
// 1b) alternatively use (less preferred):
var cat = new Object();
cat.name = 'Whiskers';

// -------------------------
// 2a) if you need to create multiple similar objects, use an "object constructor":
// (!) note how it's Capitalized
// (!) this == self
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {return this.firstName + " " + this.lastName;};
}
// (!) don't forget the NEW keyword, or your program won't work as expected
let ilja = new Person('ilja', 'moi', 22, 'blue');

// built-in constructors
var x1 = new Object();    // A new Object object - also done with {}
var x2 = new String();    // A new String object - also done with ""
var x3 = new Number();    // A new Number object - also done with 123
var x4 = new Boolean();   // A new Boolean object - also done with true / false
var x5 = new Array();     // A new Array object - also done with []
var x6 = new RegExp();    // A new RegExp object - also done with /()/
var x7 = new Function();  // A new Function object - also done with () {}
var x8 = new Date();      // A new Date object

// -------------------------
// 2b) "factory functions" method
// (!) this article argues CONSTRUCTORS are BROKEN and SHOULD NOT BE USED - and instead propose to use factory functions
// https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/
// factory fns are similar to construcotrs, but instead of using NEW to create an object, they return the object itself
// here's the above constructor rewritten as a factory function:
const person = (firstName, lastName, age, eyeColor) => {
  const name = function() {return this.firstName + " " + this.lastName;};
  return {firstName, lastName, age, eyeColor, name};
}
let zach = person('zach', 'moi', 22, 'blue');

// -------------------------
// 2c) "class" method
// (!) note this is JUST SYNTAX - and NOT A FULL CLASS IMPLEMENTATION LIKE IN PYTHON
class ClassPerson {
    // first always comes the constructor
    constructor(first, last, age, eyecolor) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.eyecolor = eyecolor;
    };
    // static methods can't be called on instances, only on class object itself
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    };
    // getter
    get first() {
        return this._first; //yes you add _ even though above you don't have it in constructor
    };
    // setter
    set first(name) {
        this._first = name; //yes you add _ even though above you don't have it in constructor
    };
}
let tom = new ClassPerson('tom', 'moi', 22, 'blue');

// -------------------------
// 2d) prototypal inheritance (more factory functions, but harder)
// read this when (if ever) ready!
// https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
const proto = {
    name() { return this.first + " " + this.last; }
}
const anotherPerson = (first, last, age, eye) => Object.assign(
    Object.create(proto), //this is where we get the name() method
    {first, last, age, eye}
);
let george = anotherPerson('george', 'moi', 22, 'blue');

// -------------------------
// Aside: you create an object with property computed ON THE FLY
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"


// --------------------------------- Inheritance
// ---------- NEW WAY - USING CLASES

class Student extends Person {
  //we can also write a consturctor
  constructor(first, last, age, eyecolor, degree) {
    super(first, last, age, eyecolor)
    this.degree = degree;
  }
  //we can add normal methods
  shout() {return 'Im drunk like alwayz'};
  // getter
  get degree() {
    return this._degree;
  }
  // setter
  set degree(newdegree) {
    this._degree = newdegree;
  }
}
let ilja = new Student('ilja', 'moi', 22, 'blue', 'cs');

// ---------- OLD WAY - PRE ES6 AND CLASSES
// 1 create a parent object
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {console.log("nom nom nom")}
};
// 2 make a child object
function Dog() { }
// 3 inherit + reset the constructor
Dog.prototype = Object.create(Animal.prototype); //note NOT = Animal.prototype (will point to same obj)
Dog.prototype.constructor = Dog;
// 4 add any properties to child (yes needs to come after)
Dog.prototype = {
  constructor: Dog,
  bark: function() { console.log('bark'); }
};
// or simply
Dog.prototype.bark = function() {console.log('bark'); };
// 5 instantiate a kid
beagle = new Dog();
// 6 we can use the inherited method
beagle.eat(); //nom nom nom [from animal]
bragle.bark(); //bark [from dog]


// --------------------------------- Mixins
// ---------- NEW WAY - USING CLASES
const Singer = base => class extends base {
  sing() {return 'lalala'}
}
const SingerStudent = Singer(Student);
let newIlja = new SingerStudent('newIlja', 'moi', 22, 'blue', 'cs');


// ---------- OLD WAY - PRE ES6 AND CLASSES
// 1 create a mixin
const myMixin = obj => {
  obj.sing = () => console.log('lalalal');
}
// 2 add it to instance of class
myMixin(ilja);
// 3 use
ilja.sing();


// --------------------------------- Cloning
// ---------- NEW WAY - USING CLASES
let clonedIlja = Object.assign(Object.create(Object.getPrototypeOf(ilja)), ilja)

// ---------- OLD WAY - PRE ES6 AND CLASSES
// Cloning objects without preservering reference
const proto = {
    name() { return this.first + " " + this.last; }
}
const yetAnotherPerson = (first, last, age, eye) => Object.assign(
    {},
    proto, //this is where we get the name() method
    {first, last, age, eye}
);
let george2 = yetAnotherPerson('george2', 'moi', 22, 'blue');
