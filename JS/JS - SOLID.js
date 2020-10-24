// -----------------------------------------------------------------------------
// [1] The Single Responsibility Principle
// - each class / object / module should have 1 reason to change
// != do one thing. In fact do many things = but all under 1 umbrella
// How to actually do it:
// 1. If you find yourself wanting to call a function "loginUserAndSomethingElse" - you're breaking it
// 2. For every fn you create, think if there's a useful part that can be extracted into an even smaller fn

// BAD:
const areaCalculator = (shape) => {
    let area; //logic to calc area
    return `<h1>
        Sum of the areas of provided shapes:
        ${area}
    </h1>`
}

// GOOD:
const areaCalculator = (shape) => {
    let area; //logic to calc area
    return area;
}
const areaHTMLPreviewer = (area) => {
    return `<h1>
        Sum of the areas of provided shapes:
        ${area}
    </h1>`
}


// -----------------------------------------------------------------------------
// [2] The Open/Closed Principle
// Means JS modules should be open to extension, but closed to modification
// Means if someone wants to extend a fn, they don't have to modify existing code

// BAD:
let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
};

// GOOD:
let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
  // this makes the diff. Allows me to extend the iceCreamMaker class
  addFlavor(flavor) {
    iceCreamFlavors.push(flavor);
  },
};


// -----------------------------------------------------------------------------
// [3] The Liskov Substitution Principle
// every subclass derived from class should be substitutable for its parent
// in other words, "is a" relationship should make sense
/*
If it looks like a duck, quacks like a duck, but needs batteries -
you probably have the wrong abstraction.
*/

// BAD:
// bad coz area formula from parent is not longer valid. For a 3d shape it's different
// also: "3d shape IS NOT A 2d shape"
class TwoDShape {
    area() {
        //calculates area
    }
}
class ThreeDShape extends TwoDShape {
    volume() {
        //calculates volume
    }
    // does more stuff
}

// GOOD:
// good coz color doesn't change between shapes, and so remains valid for children
// also: "3d shape IS A shape"
class Shape {
    color() {
        //returns shape color
    }
}
class ThreeDShape extends Shape {
    volume() {
        //calculates volume
    }
    // does more stuff
}


// -----------------------------------------------------------------------------
// [4] The Interface Segregation Principle
// whenever you expose a module make sure only the bare essentials are REQUIRED - and the rest are optional
/*
eg you only need method X from library
but to be able to use it you also need to implement methods Y and Z, which you don't actually need
*/

// BAD:
// 2d shapes would have no use for the volume method
const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state),
  volume: () => state.volume(state)
})

// GOOD:
// we separate out 2d vs 3d shapes:
const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state)
})
const solidShapeInterface = (state) => ({
  type: 'solidShapeInterface',
  volume: () => state.volume(state)
})


// -----------------------------------------------------------------------------
// [5] The Dependency Inversion Principle
// == dependency injection == inversion of control

// BAD
// here we're explicitly relying on methods being called .trigger and .on - but what if dispatcher needs to change?
function awesomeSauce(dispatcher) {
  dispatcher.trigger('awesome/sauce');
}
function awesomeSauceListener(dispatcher) {
  dispatcher.on('awesome/sauce', () => {
    alert('awesome!');
  });
}

// GOOD
// here we're just taking in a dispatch / listen methods, which could be called anything on the dispatcher's end
function awesomeSauce(dispatch) {
  dispatch('awesome/sauce');
}

function awesomeSauceListener(listen) {
  listen('awesome/sauce', () => {
    alert('awesome!');
  });
}
