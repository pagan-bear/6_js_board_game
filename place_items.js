
/* place_items.js
 *
 * Generate an array that lists the co-ordinates where an item should be placed
 */

// Set variable values for tesitng purposes
let array = [], tileSize = 50, canvasWidth = 400, canvasHeight = 400;

function placeItems(n) {
  // Set function variables
  let placed = 0, maxAttempts = n * 10;

  while(placed < n && maxAttempts > 0) {
    let x = ~~((Math.round(~~(Math.random()*canvasWidth) / tileSize)) * tileSize),
        y = ~~((Math.round(~~(Math.random()*canvasHeight) / tileSize)) * tileSize),
        available = true;

    for(var point in array) {
      if(Math.abs(point.x-x) < tileSize && Math.abs(point.y-y) < tileSize) {
        available = false;
        break;
      }
    }

    if(available) {
      array.push({ x: x, y: y });
      placed += 1;
    }
    maxAttempts -= 1;
  }
}

let numItems = 5;
placeItems(numItems);
/*
console.log('random (x, y)\'s');
console.log(array);

Object.keys(array).forEach(function(key){
  console.log(key, 'x: ' + array[key].x + ', y: ' + array[key].y);
});
*/
// var workArray = Object.entries(array);
console.log('array');
console.log(array);
console.table(array);
let workArray = [];
for ( let i=0; i<array.length; i++ ) {
  console.log(typeof(array[i].x) + ', ' + typeof(array[i].y));
}

/*
var names = items.map(function(item) {
  return item['name'];
});

console.log(names);
console.log(items);
*/
