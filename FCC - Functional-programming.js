// --------------------------------- FUNCTIONAL PROGRAMMING
inputArr = [1,2,3];
mappedArr = inputArr.map(i => i*3); // [3, 6, 9]
filteredArr = inputArr.filter(i => i>=3) // [3]
reducedArr = inputArr.reduce((product, i) => product * i, 1) //same effect as map. Reduce is the most general of the 3 and can be used to implement any of the 3. Third argument is the "starting" product value. In this case 1.

// check if every/some member of an array satisfies some property
arr.every(x => x>0); //true or false
arr.some(x => x>0); //true or false

// curried functions = useful when can't supply all arguments at once
//Un-curried function
function unCurried(x, y) {
  return x + y;
}
//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y
curried(1)(2) // Returns 3

// similarly, partial functions can be used when all args aren't available at once
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
