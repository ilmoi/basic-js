// --------------------------------- PROMISES
// (!) before promises we used callabacks

// ES6 way of doing it
// create a new promise
// promise can be in one of 3 states: 1)pending, 2)fulfilled, 3)rejected
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

// handle a resolved promise
// where "result" == argument given to the resolve method
myPromise.then(result => {
  // do something with the result.
});

// handle a rejected promise
myPromise.catch(error => {
  // do something with the error.
});

// ES7 introduced async/await
