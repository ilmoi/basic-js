// --------------------------------- ARRAYS
myArray.push('new element') //instead of .append()
myArray.shift() //pops and returns the first element of the array
myArray.unshift() //add elemes in front of the array. basically push from other end

// spread operator = unpacks an array into a CSV list
// as a result we move from this
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
// to this
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
// another example
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line

// array destructuring
// diff to spread operator in that produces an array NOT a CSV list
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// in python we do this: a, b, *c = (1, 2, 3, 4, 5). In JS:
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// in python we do this: a, b = b, a. In JS:
[a, b] = [b, a];

// we could even destructure an array-type argument passed to a function:
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}

// remove 2 elements beginning with the 3rd element
// (!) returns the 2 elems removed
array.splice(2, 2);
//can insert at the same time as delete - here we're inserting 2 elems in particular but can be any number
numbers.splice(startIndex, amountToDelete, 13, 14);

// copy (extract) a slice to a new array
// takes 2 indices - start (incl), stop (excl)
let newArr = oldArr.slice(1,3);

// copy an arr
let newArr = [...oldArr];
// create an array of arrays
a.push(...oldArr);
// merge into a single array
a.push([...oldArr]);

// find if item in array (if not -> returns -1)
fruits.indexOf('xxx');

// iterate over an array
// (!) note, x itself is just an index - unlike in python
// (!) x is also a string and to convert to int you have to do parseInt(x, 10);
for (let x in arr) {
  console.log(arr[x]);
}

// sort in js
// (!) by default sort works alphabetically, to sort integers do:
numArray.sort(function(a, b) {
  return a - b;
});

// concatenate arrays
// in python: a1.extend(a2)
// (!) push mutates in place, concat returns a new array
[1, 2, 3].concat([4, 5, 6]);
