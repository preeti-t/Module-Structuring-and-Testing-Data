
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Variable should be declared as "num" and later value should be passed to "num" > write your prediction of the error here

/*function square(3) {
    return num * num;
}*/

// SyntaxError: Unexpected number > write the error message here

// can’t put a number (3) as a parameter name.
//Function parameters must be identifiers (like num, x, or value), not literal values.
//returning num * num, but num is never defined> explain this error message here

// Finally, correct the code to fix the problem

function square(num) {
  return num * num;
}

console.log(square(3)); 



