/* draw_board.js */

function drawBoard() {
  for (var i=0; i<rows; i++) {
    // Initialise inner array
    boardArray[i] = [];
    for (var j=0; j<cols; j++) {

      boardArray[i][j] = randomNumber(0, 1);

      if (boardArray[i][j] === 0) { ctx.drawImage(floor, posX, posY, 50, 50); }
      if (boardArray[i][j] === 1) { ctx.drawImage(wall, posX, posY, 50, 50); }

      // Move to next "column"
      posX += 50;
    }
      // Move to next "row"
      posX = 0;
      posY += 50;
  }
};
