const minimum = 1;
const maximum = 100;

// Generate a random integer between minimum and maximum (inclusive)
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(`The random number is: ${num}`);
