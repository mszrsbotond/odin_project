export function handleBoard(id, user, square) {
  for (let z = 0; z < 100; z++) {
    let currSquare = user.gameboard.board[z];
    if (id == currSquare.id) {
      if (currSquare.ship != null) {
        square.style["background-color"] = "green";
      } else if (user.gameboard.board[z].ship == null) {
        square.style["background-color"] = "red";
      }
    }
  }
}
