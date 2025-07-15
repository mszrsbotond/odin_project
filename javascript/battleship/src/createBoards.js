const body = document.querySelector("body");

export function createPlayerBoard(rowSize) {
  const playerBoardContainer = document.createElement("div");
  playerBoardContainer.classList.add("playerBoardContainer");
  body.appendChild(playerBoardContainer);

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

    let id = `${letters[letterPos]}${y}`;
    square.setAttribute("id", id);
    square.style["width"] = squareSize + "px";
    square.style["height"] = squareSize + "px";
    playerBoardContainer.appendChild(square);

    y++;
  }

  body.appendChild(playerBoardContainer);
}

export function createAIBoard(rowSize) {
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

    let id = `${letters[letterPos]}${y}`
    square.setAttribute("id", id);
    square.style["width"] = squareSize + "px";
    square.style["height"] = squareSize + "px";
    AIBoardContainer.appendChild(square);

    y++;
  }

  body.appendChild(AIBoardContainer);
}
