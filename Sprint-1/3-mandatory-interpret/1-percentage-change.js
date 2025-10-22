let carPrice = "10,000";
let priceAfterOneYear = "8,543";

// Remove commas and convert strings to numbers
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// Calculate price difference and percentage change
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}%`);
