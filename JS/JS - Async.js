// --------------------------------- ASYNC & PROMISES
// 1 first there were callbacks - DONT USE, THE WORST
// 2 then promises (.then, .catch) - GOOD FOR CHAINING MULTIPLE REQUESTS
// 3 then async/await

// ------------1 callbacks
// a) a simple synchronous callback function
function greetings(name) { console.log(`hello ${name}`); }
function saySomething(fn) {
    const name = 'ilja';
    fn(name);
}
saySomething(greetings);

// b) an asynchronous callback function
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function callback(userInput) {
  console.log(userInput);
  rl.close();
}
rl.question("Enter your move: ", callback) //we're waiting for the user to reply (async), before taking the next step


// ------------2 promises (ES6)
// ------------
// ES6 way of doing it
// create a new promise
// promise can be in one of 3 states: 1)pending, 2)fulfilled, 3)rejected
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
})
// handle a RESOLVED promise
.then(result => {
  // do something with the result.
})
// handle a REJECTED promise
.catch(error => {
  // do something with the error.
});

// in practice:
// a) the short way of writing it:
function proposedMove() {
    return inquirer.prompt(q)
      .then(ans => {
        console.log(ans.move);
        return ans.move;
      })
      .catch(error => {
        console.log(error);
      })
}

// b) long way of writing it
function proposedMove() {
    return new Promise((resolve, reject) => {
      resolve(inquirer.prompt(q)); //resolve seems to be equivalent to return
    })
      .then(ans => {
        console.log(ans.move);
        return ans.move;
      })
      .catch(error => {
        console.log(error);
      })
}

// ------------
// promise.all - when you trigger multiple async interactions but only want to respond when ALL complete
Promise.all([promise1, promise2])
.then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});

// in practice:
const Promise1 = new Promise((resolve, reject) => {
  resolve(fetch('http://google.com/'));
})
const Promise2 = new Promise((resolve, reject) => {
  resolve(fetch('http://google.com/'));
})
Promise.all([Promise1, Promise2])
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})

// ------------
// promise.race - trigger where at least 1 api returns
Promise.race([promise1, promise2])
.then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});





// ------------3 async/await (ES7)
// big takeaway - this lets us NOT do .then chains INSIDE THE ASYNC FUNCTION.
// We still need to chain them afterwards, because the function itself returns a promise

//async function always returns a promise
const getTodos = async () => {
  //the await keyword stops JS from assigning value to response until the promise has been resolved
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //this will also go into the catch block
  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const unpackedResponse = await response.json();
  //hence now the below works!
  console.log(unpackedResponse);
  return unpackedResponse;
}
getTodos() //nonblocking
  .then(data => console.log('resolved', data))
  .catch(err => console.log('rejected', err.message))

 // can use on arrays:
 anArray.forEach(async item => {
   // do something asynchronously for each item in 'anArray'
   // one could also use .map here to return an array of promises to use with 'Promise.all()'
 });
