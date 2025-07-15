export function handleClick(user, square) {
  let id = square.id;
  user.gameboard.receiveAttack(id);
  for (let z = 0; z < 100; z++) {
    if (
      id == user.gameboard.board[z].id &&
      user.gameboard.board[z].ship != null
    ) {
      console.log(user.gameboard);
      square.style["background-color"] = "green";
    } else if (
      id == user.gameboard.board[z].id &&
      user.gameboard.board[z].ship == null
    ) {
      square.style["background-color"] = "red";
    }
  }
}


