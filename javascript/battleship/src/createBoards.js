const body = document.querySelector("body");

export function createPlayerBoard(rowSize) {
  /* creating container for the player board (the outline of the grid) */
  const playerBoardContainer = document.createElement("div");
  playerBoardContainer.classList.add("playerBoardContainer");
  body.appendChild(playerBoardContainer);

  /* y keeps track of where we are currently in the numbers, this helps stay between 0-9 */
  let y = 0;

  /* letters to the id */
  let letterPos = 0;
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  /* deciding the  square size of the outline grid*/
  let squareSize = 400 / rowSize - 2;
  for (let x = 0; x < rowSize * rowSize; x++) {
    /* creating a square */
    const square = document.createElement("div");

    /* checking y to see if its between 0-9, if its 10 it resets to 0 */
    if (y === 10) {
      y = 0;
      letterPos++;
    }

    /* declaring the id, using the variables we created */
    let id = `${letters[letterPos]}${y}`;
    /* setting them to the square */
    square.setAttribute("id", id);
    /* styling the square */
    square.style["width"] = squareSize + "px";
    square.style["height"] = squareSize + "px";

    playerBoardContainer.appendChild(square);

    y++;
  }

  body.appendChild(playerBoardContainer);
}

export function createAIBoard(rowSize) {
  /* create container */
  const AIBoardContainer = document.createElement("div");
  AIBoardContainer.classList.add("AIBoardContainer");
  body.appendChild(AIBoardContainer);

  let y = 0;
  let letterPos = 0;
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  let squareSize = 400 / rowSize - 2;
  for (let x = 0; x < rowSize * rowSize; x++) {
    const square = document.createElement("div");

    if (y === 10) {
      y = 0;
      letterPos++;
    }
    /* set id */
    let id = `${letters[letterPos]}${y}`;
    square.setAttribute("id", id);
    /* styling */
    square.style["width"] = squareSize + "px";
    square.style["height"] = squareSize + "px";
    AIBoardContainer.appendChild(square);

    y++;
  }

  body.appendChild(AIBoardContainer);
}
