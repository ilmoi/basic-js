// --------------------------------- CONDITIONALS
// same as in python can check a variable == true/false by just typing its name
if (wasThatTrue) {
  return "Yes, that was true"
} else {
  return "No, that was false"
}

// switch statement
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break; //yes you need it!
  case "b":
    console.log("B");
    break;
  default:
    answer = 'stuff';
    break;
}

// conditional operator
condition ? true : false;
condition ? true : condition ? true : false;
