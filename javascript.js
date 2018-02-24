/* javascript.js */

// Random number generator - generate random number lower to upper inclusive.
function randomNumber(min, max) {
  // Basic parameter validation
  if ( max < min ) { max = [min, min = max][0]; }
  else if ( min === max ) { return min; }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomNumber(0, 9));
