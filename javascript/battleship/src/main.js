import "./style.css";

import { createAIBoard, createPlayerBoard } from "./createBoards";
import { Gameboard, Player, Ship } from "./setup";
import { handleClick, playerTurn } from "./handleClick";

const player = new Player();
player.gameboard.placeShip(["A0", "A1", "A2"]);
player.gameboard.placeShip(["J6", "J7", "J8"]);

const ai = new Player();
ai.gameboard.placeShip(["A3", "A4"]);

createPlayerBoard(10, player);
createAIBoard(10, ai);

const playerBoard = document.querySelectorAll(".playerBoardContainer > div");
const aiBoard = document.querySelectorAll(".AIBoardContainer > div");


playerTurn(ai, player)