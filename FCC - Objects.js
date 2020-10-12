// --------------------------------- OBJECTS
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// alternatively
var cat = new Object();
cat.name = 'Whiskers';

// "properties" = values associated with a given object
// access props
var prop1val = myObj.prop1; // val1
var prop1val = myObj["prop1"]; // val1

// check if property present in dict (2 ways)
users.hasOwnProperty('Alan');
'Alan' in users;

// delete prop
delete myObj.prop1;

// loop through props
for (x in cat) {
  // code to be executed
}

// get all of the values from an object:
var myArr = Object.values(cat);

// convert an object to a strings
var myString = JSON.stringify(cat;

// "this" refers to object owning the method
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// getters
var person = {
  language : "en",
  get lang() {
    return this.language;
  }
};
toDisplay = person.lang;

// setters
var person = {
  language : "",
  set lang(lang) {
    this.language = lang;
  }
};
person.lang = "en";

// why use getters + setters:
// 1 simpler syntax
// 2 equal syntax for props / methods
// 3 secure better data quality (eg can return data.toUpperCase();)
// 4 useful for doing things behind the scenes

// object constructor (think class in python)
// (!) note how it's Capitalized
// (!) this == self
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {return this.firstName + " " + this.lastName;};
}
var myFather = new Person("John", "Doe", 50, "blue");

// alternatively can (and SHOULD) use class for object construction
// (!) note this is JUST SYNTAX - and NOT A FULL CLASS IMPLEMENTATION LIKE IN PYTHON
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

// to add a property need to modify the constructor ITSELF - ot use "prototype"
Person.nationality = "English"; // won't work
Person.prototype.nationality = "English"; // will work

// built-in constructors
var x1 = new Object();    // A new Object object - also done with {}
var x2 = new String();    // A new String object - also done with ""
var x3 = new Number();    // A new Number object - also done with 123
var x4 = new Boolean();   // A new Boolean object - also done with true / false
var x5 = new Array();     // A new Array object - also done with []
var x6 = new RegExp();    // A new RegExp object - also done with /()/
var x7 = new Function();  // A new Function object - also done with () {}
var x8 = new Date();      // A new Date object

// object properties
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)
Object.defineProperty(person, "language", {value : "NO"});
Object.defineProperty(person, "language", {writable:false});
Object.defineProperty(person, "language", {enumerable:false});
Object.defineProperty(person, "language", {configurable:false});

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)
Object.getOwnPropertyNames(person);  // Returns firstName, lastName, language

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)

// -----------

// es6 destructuring assignment (similar to how tuple unpacking works in python)
const user = { name: 'John Doe', age: 34 };
// old way
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
// new way
const { name, age } = user;
// to also assign new names as you're extracting them
const { name: userName, age: userAge } = user;

// -----------

// verify object an instace of class like this:
terrier instanceof Dog; //returns true
// or vice versa
Dog.prototype.isPrototypeOf(terrier);

// OWN vs PROTOTYPE PROPS - although own are inhereted from prototype
function Bird(name) {
  this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");
let ownProps = [];
let prototypeProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

// every object has a special "constructor" prop that is the name of the class that made it
terrier.construcotr === Dog //true

// we can modify an object's prototype directly, just need to make sure we pass a constructor prop
Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

// INHERITANCE
// 1 create a parent object
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {console.log("nom nom nom")}
};
// 2 make a child object
function Dog() { }
// 3 inherit + reset the constructor
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// 4 add any properties to child (yes needs to come after)
Dog.prototype = {
  construcotr: Dog,
  bark: function() { console.log('bark'); }
};
// or simply
Dog.prototype.bark = function() {console.log('bark'); };
// 5 instantiate a kid
beagle = new Dog();
// 6 we can use the inherited method
beagle.eat(); //nom nom nom
bragle.bark(); //bark

// MIXINS
// 1 create a mixin
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
// 2 add it to any obj
flyMixin(bird);
flyMixin(plane);
// 3 they will now have that method
bird.fly() //flyiing wooo

// MAKE A VARIABLE PRIVATRE
function Bird() {
  this.publicEggs = 20; //public variable
  let hatchedEgg = 10; // private variable
  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
