export function aiTurn(player) {
  let randId = generateRandId();

  /* this is the square on the DOM */
  const square = document.querySelector(`.playerBoardContainer > #${randId}`);

  /* now we need to get the matching square from the player's gameboard object */
  for (let x = 0; x < 100; x++) {
    let currSquareOnPlayerBoard = player.gameboard.board[x];
    if (randId === currSquareOnPlayerBoard.id) {
      if (currSquareOnPlayerBoard.hit == true) {
        return aiTurn(player);
      }
      /* the gameboard obj of player receives an attack*/
      player.gameboard.receiveAttack(randId);
      for (let x = 0; x < player.gameboard.ships.length; x++) {
        player.gameboard.ships[x].checkSunk();
      }

      /* coloring the squares */
      if (currSquareOnPlayerBoard.ship != null) {
        square.style["background-color"] = "green";
      } else {
        square.style["background-color"] = "red";
      }

      /* check whether all sunk or not */
      if (player.gameboard.allSunk() === true) {
        alert("player WON");
        break;
      }
    }
  }
}

function generateRandId() {
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let randLetterIndex = Math.floor(Math.random() * 10);
  let randLetter = letters[randLetterIndex];

  let randNumIndex = Math.floor(Math.random() * 10);
  let randNum = numbers[randNumIndex];

  /* generated a random id */
  let randId = `${randLetter}${randNum}`;

  return randId;
}
