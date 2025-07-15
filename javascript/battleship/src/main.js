import "./style.css";

import { createAIBoard, createPlayerBoard } from "./createBoards";
import { Gameboard, Player, Ship } from "./setup";
import { handleClick } from "./handleClick";

const player = new Player();
player.gameboard.placeShip(["A0", "A1", "A2"]);
player.gameboard.placeShip(["J6", "J7", "J8"]);

const ai = new Player();
ai.gameboard.placeShip(["A3", "A4"]);

createPlayerBoard(10, player);
createAIBoard(10, ai);

const playerBoard = document.querySelectorAll(".playerBoardContainer > div");
const aiBoard = document.querySelectorAll(".AIBoardContainer > div");

let currUser = "player";
playerBoard.forEach((square) => {
  square.addEventListener("click", () => {
    if (currUser == "player") {
      currUser = "ai";
      handleClick(player, square);
    }else{
        alert("It's the AI's turn!")
        aiTurn()
    }
  });
});
