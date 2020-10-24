/*
"Same origin policy" = prevents docs / scripts from one origin to access docs from another origin
Otherwise you could just run JS on your own malicious site, that would use user's cookies and reach out to another site on the web under their name

This is what we cal CSRF = cross site request forgery = XSRF = session writing

could put an <a> tag or an <img> tag on your website (GET request)
<img src="https:/bank.com/transfer.do?from=123&to=123&sum=10000">

alternatively could use a form (POST request)
could even use form auto-load, so they don't have to click anything

CSRF is specific to cookies

PREVENTION THAT ACTUALLY WORKS
1. Reauthenticate (ask for captcha, password one more time)
2. Use unique form tokens on every form (ie a form needs to come with some unique token that only the server knows. then it can't be sent from a malicious website)
- include both in cookie header and in browser url, so attacker can't fake the second if they have acess to the cookie

*/



/* CORS = cross origin resource sharing
great video - https://www.youtube.com/watch?v=Ka8vG5miErk

This is the stuff that actually allows us to make CO request (the solution)
It's a relaxation policy on top of SO policy that says "no, only requests from the same url allower"

How it works:

Server side:
- They include the following headers when they reply: "Access-Control-Allow-Origin"
you would set that header as key, and then the value of the website that you want to allow access to as value

Our side:
*/

// if your somain is added to "Access-Control-Allow-Origin", or that header is set to "*"
// then you can make a simple request and it'll work
fetch("www.google.com").then(data => data.text()).then(console.log)

// sometimes you'll have to add headers
// when we do, the browser will first do a "preflight options" request
// this means before issuing your request the browser sent an OPTIONS method

// for the below request to work the following needs to be in place:
// 1 server needs to have functionality to receive OPTIONS requests
// 2 under OPTIONS route, server needs to respond with "Access-Control-Allow-Origin"
// 3 under OPTIONS route, server needs to allow "Content Type" header

fetch("www.google.com", {
    headers: {
        "Content-Type": "json/application"
    }
}).then(data => data.text()).then(console.log)
