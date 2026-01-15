function getOrdinalNumber(num) {
  if (num > 1 || num < 1) {
    return num + " is not 1st";
  }

  return "1st";
}

console.log(getOrdinalNumber(1)); // "1st"
console.log(getOrdinalNumber(2)); // "2 is not 1st"
console.log(getOrdinalNumber(0)); // "0 is not 1st"

module.exports = getOrdinalNumber;
