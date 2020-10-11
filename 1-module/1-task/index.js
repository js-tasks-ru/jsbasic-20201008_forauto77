/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let fact = 1;
  while (n > 0) {
    fact *= n;
    n -= 1;
  }
  return fact;
}
