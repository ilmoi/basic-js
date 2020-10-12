// --------------------------------- EXPORT / IMPORT
// to take advantage of ES6 export/import need to include a script in your index html
<script type="module" src="index.js"></script>

// EXPORT
// a function
export const add = (x, y) => {
  return x + y;
}
// many functions at the end of a doc
export { add, subtract };

// IMPORT
import { add, subtract } from './math_functions.js';
import * as myMathModule from "./math_functions.js";

// EXPORT/IMPORT DEFAULT
// (!) used to export only one value, which we can then import without curly braces
// (!) can't use with var, let, const
export default function add(x, y) {
  return x + y;
}

import add from "./math_functions.js";
