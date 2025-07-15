export function colorBoard(id, user, square) {
  for (let z = 0; z < 100; z++) {
    if (
      id == user.gameboard.board[z].id &&
      user.gameboard.board[z].ship != null
    ) {
      square.style["background-color"] = "green";
    } else if (
      id == user.gameboard.board[z].id &&
      user.gameboard.board[z].ship == null
    ) {
      square.style["background-color"] = "red";
    }
  }
}