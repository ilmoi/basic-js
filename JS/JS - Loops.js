// --------------------------------- LOOPS
var i = 0;
while (i < 5) {
    console.log('hooooraaay');
    i++;
}

// iterate over contents of an array
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// do while (always does the first pass of the loop no matter what)
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// in JS we can choose which loop to break out of
Loop1:
for (i = 0; i < 3; i++) {
  Loop2:
  for (j = 0; j < 5; j++) {
    if (j === 2) {
      break Loop2;
    }
  }
}

// forEach is a useful way to handle each item in an array
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e);
    })
})
