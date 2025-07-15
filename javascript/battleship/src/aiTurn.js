import { colorBoard } from "./colorBoard";

export function aiTurn(player) {
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let randLetterIndex = Math.floor(Math.random() * 10);
  let randLetter = letters[randLetterIndex];

  let randNumIndex = Math.floor(Math.random() * 10);
  let randNum = numbers[randNumIndex];

  let randId = `${randLetter}${randNum}`;

  const square = document.querySelector(`.playerBoardContainer > #${randId}`);

  colorBoard(randId, player, square)
}

