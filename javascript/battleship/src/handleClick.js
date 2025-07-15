import { aiTurn } from "./aiTurn";
import { colorBoard } from "./colorBoard";

function handleClick(ai, player, square) {
  let id = square.id;
  ai.gameboard.receiveAttack(id);
  colorBoard(id, ai, square)
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
