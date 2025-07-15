export function handleClickPlayer(player) {
  const playerBoard = document.querySelectorAll(".playerBoardContainer > div");

  playerBoard.forEach((square) => {
    square.addEventListener("click", () => {
      let id = square.id
      player.gameboard.receiveAttack(id);
      for (let z = 0; z < 100; z++) {
        if (
          id == player.gameboard.board[z].id &&
          player.gameboard.board[z].ship != null
        ) {
          console.log(player.gameboard);
          square.style["background-color"] = "green";
        } else if (
          id == player.gameboard.board[z].id &&
          player.gameboard.board[z].ship == null
        ) {
          square.style["background-color"] = "red";
        }
      }
    });
  });
}


export function handleClickAI(AI) {
  const AIBoard = document.querySelectorAll(".AIBoardContainer > div");

  AIBoard.forEach((square) => {
    square.addEventListener("click", () => {
      let id = square.id
      AI.gameboard.receiveAttack(id);
      for (let z = 0; z < 100; z++) {
        if (
          id == AI.gameboard.board[z].id &&
          AI.gameboard.board[z].ship != null
        ) {
          console.log(AI.gameboard);
          square.style["background-color"] = "green";
        } else if (
          id == AI.gameboard.board[z].id &&
          AI.gameboard.board[z].ship == null
        ) {
          square.style["background-color"] = "red";
        }
      }
    });
  });
}
