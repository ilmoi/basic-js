// https://eloquentjavascript.net/15_event.html

// -----------------------------------------------------------------------------
// how would you know if an event occurs in the browser?
// 1 - you could constantly listen for it - but what if you need to do some computation?
// 2 - you could stick the event into a queue and periodically checkt it (called polling) - but slow
// 3 - you could add an evnet handler to the event of interest
window.addEventListener('click', callback);

// there are 3 different (Equivalent) ways to do it:
// 1 inside HTML
<button onclick="alertMe()">Method 1 Named</button>
// 2 in js, specific (but can have only 1)
window.onclick(callback);
// 3 in js, general (can have many)
window.addEventListener('click', callback);
window.addEventListener('click', callback2);


// -----------------------------------------------------------------------------
// remove

window.removeEventListener('click');


// -----------------------------------------------------------------------------
// event objects
window.addEventListener('click', event => {
    do_what_we_want_with(event);
});

// every event has a target property - in this way we can ensure we're handling the event we care about
document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("ONLY LOG FOR BUTTONS!");
    }
});


// -----------------------------------------------------------------------------
// propagation
// for most events, if we're listening on a PARENT, but a CHILD receives it - we still register it ok
// but if both PARENT AND CHILD have a handler - the more specific one takes precedence
// thus event "propagates" from specific to general handlers
// we can prevent higher (more general) handlers from receiving the event using stopPropagation
button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
if (event.button == 2) event.stopPropagation(); //here we're stopping right clicks from propagating up the chain
});


// -----------------------------------------------------------------------------
// defaults
// many events have a default action int the browser (eg right clicks open up the context menu)
// event handlers register before the default action happens, so we can prevent it
x.addEventListener('click', event => {
    console.log('gonna prevent defaultz');
    event.preventDefault();
});

// some events can’t be intercepted at all.
// On Chrome, for example, the keyboard shortcut to close the current tab (control-W or command-W) cannot be handled by JavaScript.


// -----------------------------------------------------------------------------
// keydown vs keyup

// keydown = fired 1)when pressed, 2)continuously when held
window.addEventListener("keydown", event => {
    if (event.key == "v") {
        document.body.style.background = "violet";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "v") {
        document.body.style.background = "";
    }
});

// registering modifier keys
window.addEventListener('keydown', event => {
    if(event.key == 'v' && event.ctrlKey) {
        console.log('both v and ctrl key have been pressed together');
    }
});

// DOM node where they key originates = the one which is in focus when key is pressed
// buttons, links, form fields can be in focus by default
// other elements however require tabinex >= 0;

// reading keystrokes to figure out what's being typed is a BAD idea
// some users have scripts that fire on certain keys (think Dygma Bazecor)
// instead, read the input directly from fields such as <inpu> and <textarea>


// -----------------------------------------------------------------------------
// mouse clicks

// 2 ways to point at things - 1)mouse, 2)touchscreen
// mouse = mousedown + mouseup events (similar to keydown, keyup)
// "click" event happens on most specific elem that contains both the one where mousedown happened and the one where mouseup happened
// "dblclick" = when 2 clicks happen close together
// "clientX", "clientY" = precise location where the event happened

// -----------------------------------------------------------------------------
// mouse motion

// "mousemove" fired when mouse moves
// cba - https://eloquentjavascript.net/15_event.html

// -----------------------------------------------------------------------------
// touch events

// cba - https://eloquentjavascript.net/15_event.html

// -----------------------------------------------------------------------------
// scroll events

// cba - https://eloquentjavascript.net/15_event.html

// -----------------------------------------------------------------------------
// focus events

// "focus" fired when element selected
// "blue" fired when element deselected
// (!) unlike prev events, these 2 DO NOT PROPAGATE
<p>Name: <input type="text" data-help="Your full name"></p>
<p>Age: <input type="text" data-help="Your age in years"></p>
<p id="help"></p>

<script>
  let help = document.querySelector("#help");
  let fields = document.querySelectorAll("input");
  for (let field of Array.from(fields)) {
    field.addEventListener("focus", event => {
      let text = event.target.getAttribute("data-help");
      help.textContent = text;
    });
    field.addEventListener("blur", event => {
      help.textContent = "";
    });
  }
</script>

// (!) the window object itself will receive focus / blur events when the user switches to/from current tab

// -----------------------------------------------------------------------------
// load

// "load" event fired when the page successfully loads
// (!) this btw activates the <script> tag
// (!) images and <script> itself have separate load tags

// "beforeunload" fires right before a page is closed at user's request. The main use is to save the user's work
// if you
// 1) prevent the default behavior of the event
// and 2) set returnValue to a string
// - the browser will show the user a dialogue asking if they really want to close the screen
// (!) some browsers won't display your string to prevent dodgy websites from showing you shitty ads before you leave

// -----------------------------------------------------------------------------
// event loops

// browser event handlers behave like async notifications
// == scheduled when event occurs, but must wait for other scripts that are running to finish before they get a chance to run

// for use-cases when need to do something long-running use "web workers"
// workers don't share global scope or any other data with main script
// instead you have to communicate with them by sending msgs back/forth

// 1 write the worker in some_worker.js
addEventListener('message', event => {
    postMessage(event.data); //here the worker posts the message back
})

// 2 spawn a worker
let worker = new Worker('code/some_worker.js')

// 3 create a handler for reponses
worker.addEventListener('message', event => {
    console.log('ive processsed the data and am returning it', event.data);
})

// 4 send it some messages
worker.postMessage(22);
worker.postMessage(43);

// the order of events will actually be: 4 (we send a message) to 2 (the worker) who processes it according ot its definition (1) and returns (3)

// (!) only JSON values can be sent back/forth as messages
// (!) the other side receives a COPY rather than the actual message

// -----------------------------------------------------------------------------
// timing

// cba - https://eloquentjavascript.net/15_event.html


// -----------------------------------------------------------------------------
//debouncing

// cba - https://eloquentjavascript.net/15_event.html


// -----------------------------------------------------------------------------
