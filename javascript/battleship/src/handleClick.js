import { aiTurn } from "./aiTurn";
import { handleBoard } from "./handleBoard";

function handleClick(ai, player, square) {
  let id = square.id;
  ai.gameboard.receiveAttack(id);
  handleBoard(id, ai, square)
  aiTurn(ai, player);
}

export function playerTurn(ai, player) {
  const aiBoard = document.querySelectorAll(".AIBoardContainer > div");
  aiBoard.forEach((square) => {
    square.addEventListener("click", () => {
        handleClick(ai, player, square);
    });
  });
}
