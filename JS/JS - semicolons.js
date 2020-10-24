// There are only 3 cases where semicolons in JS matter
console.log('it works')

// 1 if you declare an array without naming it
//without a semicolon before here it breaks
;[1,2,3].forEach(n => {
    console.log(n)
})


// 2 if you have a function that immediately invokes:
//without a semicolon before here it breaks
;(function() {
    console.log('grrrr')
})()


// 3 when you put the return on a new line rather than on the same line
function returnBear() {
    return
        {bear: 'yay'} //returns undefined because it automatically places a semicolon on previous line
}

console.log(returnBear())
