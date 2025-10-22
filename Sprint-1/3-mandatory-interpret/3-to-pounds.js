// 1️⃣ Initialize a string representing a price in pence, ending with 'p'
const penceString = "399p";

// 2️⃣ Remove the trailing "p" from the string
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3️⃣ Pad the number string on the left with zeros to ensure it has at least 3 digits
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4️⃣ Extract the pounds part (all digits except the last 2)
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5️⃣ Extract the pence part (the last 2 digits) and pad it on the right if needed
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 6️⃣ Build the final formatted price string in pounds and pence
console.log(`£${pounds}.${pence}`);
