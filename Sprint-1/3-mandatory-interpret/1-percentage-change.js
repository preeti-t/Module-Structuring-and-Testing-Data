let carPrice = "10,000";
let priceAfterOneYear = "8,543";

// Remove commas and convert strings to numbers
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// Calculate price difference and percentage change
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}%`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are 3 function calls in total. And name of all the functions are: carPrice.replaceAll(",", ""), Number(carPrice.replaceAll(",", "")) and console.log(...) */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//I got a syntax error because in line 5 I was missing a comma between "," and "". I added it.

// c) Identify all the lines that are variable reassignment statements
//  line 5 : carPrice = Number(carPrice.replaceAll(",", "")); and line 6: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// let carPrice = "10,000";let priceAfterOneYear = "8,543";const priceDifference = carPrice - priceAfterOneYear;const percentageChange = (priceDifference / carPrice) * 100; 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//It removes the comma from the string 10,000 so it can turn it to a number.
