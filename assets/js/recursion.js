// //task 1

// function valid(base, exponent) {
//   if (typeof base !== "number") {
//     throw new TypeError("base must be number");
//   }
//   if (typeof exponent !== "number") {
//     throw new TypeError("exponent must be number");
//   }
//   if (
//     !Number.isInteger(exponent) ||
//     exponent < 0 ||
//     exponent > Number.MAX_SAFE_INTEGER
//   ) {
//     throw new RangeError("exponent must be nonnegative integer value");
//   }
//   return base ** exponent;
// }
// function pow(base, exponent) {
//   if (exponent === 1) {
//     return base;
//   }
//   return base * pow(base, exponent - 1);
// }

// try {
//   const powNumber = valid(3, 3);
//   console.log(powNumber);
// } catch (err) {
//   if (err instanceof RangeError) {
//     console.log("RangeError");
//   } else if (err instanceof TypeError) {
//     console.log("TypeError");
//   } else {
//     console.log("Error");
//     console.log("error:>>", err);
//   }
// }
