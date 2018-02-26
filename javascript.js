/* javascript.js */

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let array = [], tileSize = 50, canvasWidth = 400, canvasHeight = 400;
// let canvasWidth = document.getElementById('canvas.width');
// let canvasHeight = document.getElementById('canvas.height');

// Define the tile images
let floor = new Image();
let wall = new Image();

wall.src = 'img/map/stakes-fence.png';
floor.src = 'img/map/brick-wall.png';

// Initilise the boardArray ()
let boardArray = [];
let itemArray = [];

// Initialise layout start position - TRH corner for boardArray
let posX = 0, posY = 0;
const rows = 8, cols = 8;

// Random number generator - generate random number lower to upper inclusive.
function randomNumber(min, max) {
  // Basic parameter validation
  if ( max < min ) { max = [min, min = max][0]; }
  else if ( min === max ) { return min; }

  min = Math.ceil(min);
  max = ~~(max);
  return ~~(Math.random() * (max - min + 1)) + min;
};

function initBoard() {
  // Draw a board full of floor tiles
  for (let i=0; i<rows; i++) {
    // Initialise inner array
    boardArray[i] = [];
    for (let j=0; j<cols; j++) {
      ctx.drawImage(floor, posX, posY, 50, 50);
      posX += 50;
    }
    posX = 0;
    posY += 50;
  }
}

function placeItems(array, n, icon) {
  // Set function variables
  let placed = 0, maxAttempts = n * 5;

  while(placed < n && maxAttempts > 0) {
    let x = ~~((Math.round(~~(Math.random()*canvasWidth) / tileSize)) * tileSize),
        y = ~~((Math.round(~~(Math.random()*canvasHeight) / tileSize)) * tileSize),
        available = true;

    for(let point in array) {
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
  for ( let i=0; i<array.length; i++ ) {
    ctx.drawImage(icon, (array[i].x), (array[i].y), tileSize, tileSize);
  }
}

// Program starts here
initBoard();

// The following will generate a maximum of numItems - it might well be less!
let numItems = 20;
itemArray = [];
placeItems(itemArray, numItems, wall);
