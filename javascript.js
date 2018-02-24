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

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Define the tile images
var grass = new Image();
var sand = new Image();

grass.src = 'grassTile.jpg';
sand.src = 'sandTile.png';

// Initilise the boardArray ()
var boardArray = [];

// Initialise layout start position - TRH corner for boardArray
let posX = 0;
let posY = 0;

for (var i=0; i<8; i++) {
  // Initialise inner array
  boardArray[i] = [];
  for (var j=0; j<8; j++) {
    boardArray[i][j] = randomNumber(0, 1);

    if (boardArray[i][j] === 0) { ctx.drawImage(grass, posX, posY, 50, 50); }
    if (boardArray[i][j] === 1) { ctx.drawImage(sand, posX, posY, 50, 50); }
    posX += 50;
  }
    posX = 0;
    posY += 50;
}
console.table(boardArray);
