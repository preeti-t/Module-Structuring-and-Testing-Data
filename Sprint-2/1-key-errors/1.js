// Predict and explain first...

// Why will an error occur when this program runs?

//variable decimalNumber is already declared, we are trying to declare again 
// console.log will throw an error since decimal no is not declared outside function

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);*/

// =============> write your explanation here

// function call is required and value for the variable 'decimalNumber' should be passed through the function


// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

