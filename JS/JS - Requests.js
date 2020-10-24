// net ninja 2020 series on async & requests - https://www.youtube.com/watch?v=K-Q-xyrA89M&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=4

// 1 the old fashioned way to make requests - via
//manually making a request
const request = new XMLHttpRequest();
//listening for completion
request.addEventListener("readystatechange", () => {
  //  there are 4 different readyStates
  //  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
  //  we care about it being === 4, coz that's when the body is received
  console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText); //get a giant JSON array back
  }
  //  we can also check for request status
  if (request.status === 200) {
    console.log(request, request.responseText);
  }
})
//making the request
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();

// we can wrap the same function into a callback
const getTodo = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.status === 200) {
      callback3(undefined, request.responseText)
    } else {
      callback3("could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.send();
}
const callback3 = (err, data) => {
  console.log(err, data);
}
getTodo(callback3); // this is async behavior

// -----------------------------------------------------------------------------
// 2 the new way is to use the "fetch" api
//fetch returns a promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      //note that .then is triggered for 404 toos - we only enter the catch clause when there is a network error
      console.log('resolved', response);
      //  to actually get the data, we need to call .json
      //  NOTE: we can't yet access the data, we need to return it and pass to another .then
      return response.json();
    })
    .catch((err) => {
      console.log('rejected', err)
    })
    .then(data => {
      //yes we MUST have another .then, because response.json() returns another promise
      console.log(data);
    })

// fetch accepts the following options as a second parameter, inside of {}
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, *cors, same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
  'Content-Type': 'application/json'
  // 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data) // body data type must match "Content-Type" header

// alternative way of writing fetch requests
r1 = new Request(uri)
r2 = new Request(uri, options) //see above what you can include. We also include the headers below
h1 = new Headers() //Content-Type, Content-Length, Accept (what kind of files you're willing to get back from the server), Accept-Language
h1.append(k, v);
