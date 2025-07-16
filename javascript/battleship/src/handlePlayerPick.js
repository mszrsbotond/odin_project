import { aiTurn } from "./aiTurn";

export function handlePlayerPick(ai, player) {
  const aiBoard = document.querySelectorAll(".AIBoardContainer > div");
  aiBoard.forEach((square) => {
    square.addEventListener("click", () => {
      /* the square is the one from the DOM */
      /* getting the id of the square --> the position the player clicked on */
      let id = square.id;

      /* finding the id that matches the id from the ai's gameboard*/
      for (let x = 0; x < 100; x++) {
        /* this is the gameboard object inside the ai player not the DOM square */
        let currSquareOnAIBoard = ai.gameboard.board[x];
        if (id == currSquareOnAIBoard.id) {
          /* if the square was already clicked then click another one*/
          if (currSquareOnAIBoard.hit == true) {
            alert("already clicked");
            return;
          }
          /* the gameboard obj of ai receives an attack*/
          ai.gameboard.receiveAttack(id);

          /* coloring the squares */
          if (currSquareOnAIBoard.ship != null) {
            square.style["background-color"] = "green";
          } else {
            square.style["background-color"] = "red";
          }
          aiTurn(player);
        }
      }
    });
  });
}
