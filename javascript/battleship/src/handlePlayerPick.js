export function handlePlayerPick(ai, player) {
  const aiBoard = document.querySelectorAll(".AIBoardContainer > div");
  aiBoard.forEach((square) => {
    square.addEventListener("click", () => {
      /* the square is the one from the DOM */
      /* getting the id of the square --> the position the player clicked on */
      let id = square.id;

      /* finding the id that matches the id from the ai's gameboard*/
    });
  });
}