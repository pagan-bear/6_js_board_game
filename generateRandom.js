/* javascript.js */

// Random number generator - generate random number lower to upper inclusive.
function generateRandom(min, max) {
  // Basic parameter validation
  if ( max < min ) { max = [min, min = max][0]; }
  else if ( min === max ) { return min; }

  // ***Debug console.log('min: ' + min + ' max: ' + max);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ***Test cases

// ***Positive test cases
// Change min and max parameters for testing where (min <= max)
//for (let i=0; i<25; i++) { console.log(generateRandom(min, max)); }

/*
// Normal test
console.log(generateRandom(1, 5));
// Edge cases
console.log(generateRandom(11, 11));
console.log(generateRandom(0, 1));
console.log(generateRandom(1, 2));
*/

// *** Negative test cases
//console.log(generateRandom(5, 1));

/*
// Will return NaN
console.log(generateRandom(1, 'b'));
console.log(generateRandom('a', 5));
console.log(generateRandom('a','b'));
*/

// Null
// Will return 0 .. 10
//console.log(generateRandom(null, 10));
// Will return null
//console.log(generateRandom(null, null));


// JavaScript takes care of this one: "can't access lexical declaration"
//console.log(generateRandom(a, b));

// Will return undefined
/*
let a, b;
console.log(generateRandom(a, b));
*/
