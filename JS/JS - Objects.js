// --------------------------------- OBJECTS

// --------------------------------- Create an object (only modern, using class)
// 1) to create a single object use "object literal syntax":
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// Aside: you create an object with property computed ON THE FLY
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"

// 2) "class" method
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

// (!) objects/classes + modules (see in functions) = everything you need to avoid having global variables
// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module.
// If you need multiples of something (players!), create them with factories.


// --------------------------------- Inheritance
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


// --------------------------------- Mixins
const Singer = base => class extends base {
  sing() {return 'lalala'}
}
const SingerStudent = Singer(Student);
let newIlja = new SingerStudent('newIlja', 'moi', 22, 'blue', 'cs');


// --------------------------------- Cloning
// for classes
let clonedIlja = Object.assign(Object.create(Object.getPrototypeOf(ilja)), ilja)

// for simple dicts
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }


// ------------------------------------------------------ EVERYTHING PROPERTIES
// --------------------------------- Delete properties
delete myObj.prop1;


// --------------------------------- Check properties
// check if property present in dict (2 ways)
users.hasOwnProperty('Alan');
'Alan' in users;


// --------------------------------- Get properties
// "properties" = values associated with a given object
// access props
var prop1val = myObj.prop1; // val1
var prop1val = myObj["prop1"]; // val1

// loop through props
for (x in cat) {
  // code to be executed
}

// get all of the keys from an object:
Object.keys(cat); //ignores inherited props

// get all of the values from an object:
Object.values(cat); //ignores inherited props

Object.getOwnPropertyNames(ilja);
// [
//   "first",
//   "last",
//   "species",
//   "newProp"
// ]

Object.getOwnPropertyDescriptors(ilja);
// {
//   "first": {
//     "value": "notilja",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   },
//   "last": {
//     "value": "moi",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   },
//   "species": {
//     "value": "dog",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   },
//   "newProp": {
//     "value": "yay",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
// }

// same but for singular
Object.getOwnPropertyDescriptor(object, property)


// --------------------------------- Set properties
ilja.existing_prop = 'xyz' //works
ilja.new_pro = 'xyz' //also works

// alternatively, if we want more control over how the property works we use:
Object.defineProperty(object, property, descriptor)
// for example
Object.defineProperty(ilja, 'species', {
    value: 'human',
    // all 3 of the below default to false
    writable: false, //can we change it later using the assignment operator
    enumerable: false, //will it show up in loops, in .keys, in .values?
    // note that if a property is NOT enumeramble, it can STILL be accessed directly
    configurable: false //can we change the type of this property / delete it?
})
// alternatively we can define with getters/setters. Note this automatically sets writable to true (by defn you need it to have a setter)
Object.defineProperty(ilja, 'species', {
    enumerable: false,
    configurable: false,
    get: () => this.value,
    set: (newVal) => this.value = newVal
})

// same but for many
Object.defineProperties(object, descriptors)


// --------------------------------- Freeze properties
// Prevents adding new properties to an object
Object.preventExtensions(object)
Object.isExtensible(object)

// Prevents deleting / configuring the props, but they are still writable
Object.seal(object)
Object.isSealed(object)

// Prevents any changes to an object WHATSOEVER
Object.freeze(object)
Object.isFrozen(object)



// --------------------------------- Methods
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


// --------------------------------- Destructuring properties
// es6 destructuring assignment (similar to how tuple unpacking works in python)
const user = { name: 'John Doe', age: 34 };
// old way
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
// new way
const { name, age } = user;
// to also assign new names as you're extracting them
const { name: userName, age: userAge } = user;


// --------------------------------- Private properties
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



// ------------------------------------------------------ EVERYTHING PROTOTYPE
// --------------------------------- What's a prototype?
// basically the object that created the current object

// historically:
ilja.__proto__; // Person

// in modern JS
Object.getPrototypeOf(ilja); //Person
// (!) an object can only have 1 prototype. It can't inherit from 2


// --------------------------------- Prototypal inheritance
// The prototype is a little bit “magical”.
// When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype.
// In programming, such thing is called “prototypal inheritance”. Many cool language features and programming techniques are based on it.
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal; // (*)
// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true


// --------------------------------- The value of “this”
// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
let user = {
    name: 'john',
    last: 'smith'
    get fullName() {
        return this.name + this.last;
    }
}
let admin = {
    __proto__: user,
    isAdmin: true
}
admin.fullName = 'alice cooper'
admin.fullName //alice cooper
user.fullName //john smith

// (!) note if you're using construcotrs, it's best to define functions on the prototype of the object
// in this way all objects from that constructor will share one function
Student.prototype.sayName = function() {
  console.log(this.name)
}


// --------------------------------- Verify instance / prototype
// verify object an instace of class like this:
terrier instanceof Dog; //returns true
// or vice versa
Dog.prototype.isPrototypeOf(terrier);


// --------------------------------- OWN vs PROTOTYPE properties
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
