// https://eloquentjavascript.net/10_modules.html

// -----------------------------------------------------------------------------
// evaluating data as code

// option 1 - using eval()
var x = 1;
function evalAndReturnX(code) {
    eval(code); //JS's eval function evaluates strings as if they were code
    return x;
}
console.log(evalAndReturnX("var x = 2"));

// option 2 - using Function constructor
// takes 2 args - a string of comma-separated function args and a function body
let plusOne = Function('n', 'return n+1;');
console.log(plusOne(4));

// -----------------------------------------------------------------------------
// commonJS == OLD NOTATION (pre 2015)

// relies on 2 things: "require" kw to import stuff and "export" kw to export stuff

const ordinal = require("ordinal");
const {days, months} = require("date-names");

// ...our fn code...

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};
// what we're able to achieve here:
// interface = single function
// but what we're using to build that function is more complex (days, months from date-names)

// -----------------------------------------------------------------------------
// ES modules = NEW NOTATION (post 2015)
import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* ... */ }

// When there is a binding named default, it is treated as the module’s main exported value.
// If you import a module like ordinal in the example, without braces around the binding name, you get its default binding.
// Such modules can still export other bindings under different names alongside their default export.
export default ["Winter", "Spring", "Summer", "Autumn"];

// you can rename when you import
import {days as dayNames} from "date-names";


// -----------------------------------------------------------------------------
// bundlers & minifiers

// "bundlers" are software the aggregate a bunch of small files into one large
// this is done coz fething one large file over a network is faster than fetching a lot of small ones

// "minifiers" = tools that take a js program and make it smaller by removing comments & whitespaces, renaming bindings, and replacing code with smaller pieces that do the same

// it's also common to pass a file through a conversion tool that converts modern js to old js
// think https://babeljs.io/
