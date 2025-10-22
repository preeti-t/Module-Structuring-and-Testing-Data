// Predict and explain first...


//function capitalise(str) {    //function already declares a parameter named str. 
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;   //to declare another variable called str using let, which is not allowed
// return str;
//}


// here is the new code

function capitalise(str) {
let result = `${str[0].toUpperCase()}${str.slice(1)}`; //Taking the first character of the string and converts it to uppercase and rest of the string, starting from index 1.
  return result;
}

