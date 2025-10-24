// Predict and explain first...

// Predict the output of the following code:
// console.log should be return only 103> Write your prediction here

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
/*The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3> write the output here*/
// Explain why the output is the way it is
// because we have provided a constant value 103 to num> write your explanation here
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number: yes
/* here is the new output
The last digit of 42 is 2
The last digit of 105 is 5
The last digit of 806 is 6*/
// now I have defined a function that takes one argument, num. also removed const funtion
