// https://eloquentjavascript.net/14_dom.html

// -----------------------------------------------------------------------------
// RETRIEVE ELEMS

// via ids
document.body.getElementById("id_goes_here");

// via tags
// (!) NOTE returns a NODELIST
// (!) NOTE it's LIVE - any changes made to DOM reflect in it immediately. So need to loop through from end to start
document.body.getElementsByTagName("a")[0];
// (!) to convert to array and to get rid of the live property we do:
Array.from(document.body.getElementsByTagName("a")[0];)

// via classes
// (!) NOTE returns an NODELIST
// (!) NOTE it's LIVE - any changes made to DOM reflect in it immediately. So need to loop through from end to start
document.body.getElementsByClassName("id_goes_here");
// (!) to convert to array and to get rid of the live property we do:
Array.from(document.body.getElementsByClassName("id_goes_here"));

// using query selector
document.body.querySelector('tag');
document.body.querySelector('#id');
document.body.querySelector('.class');
document.body.querySelector('tag, .class'); //tag OR class
document.body.querySelector('tag.class'); //class inside of tag
document.body.querySelector('tag>.class'); //class which is direct child of tag


// (!) NOTE returns an ARRAY
// (!) NOTE it is NOT LIVE
document.body.querySelectorAll('tag');
// (!) to convert to array
Array.from(document.body.querySelectorAll('tag'));


// -----------------------------------------------------------------------------
// CHANGE THE DOM
// 2 ways to insert
parent.appendChild(newKid);
parent.insertBefore(newKid, currentChild);

// replace a child of a parent
parent.replaceChild(newKid, currentChild);

// create an element
let new = document.createElement('h1');

// standard attributes
new.className //class, NOTE, not actually "class"
new.tagName //class, NOTE, not actually "tag" (eg h1)
new.id //id

// custom attributes
new.setAttribute('data-custom', 'whatever');
new.getAttribute('data-custom');


// -----------------------------------------------------------------------------
// LAYOUT
// dimensions
new.offsetWidth; //elem's width
new.offsetHeight; //elem's height
new.clientWidth; //elem's width (excludes border, padding)
new.clientHeight; //elem's height (excludes border, padding)

// all dims at once
new.getBoundingClientRect; // x,y, widht, height, top, right, bottom, left

// -----------------------------------------------------------------------------
// STYLING
new.style.color = 'red';
new.style.cssText = 'color: red; background-color: black;' //many at once
