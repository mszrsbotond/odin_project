import "./style.css";

import { createAIBoard, createPlayerBoard } from "./createBoards";
import { Player } from "./setup";
import { handlePlayerPick } from "./handlePlayerPick";

/* creating a player */
const player = new Player();
player.gameboard.placeShip(["A0", "A1", "A2"]);
player.gameboard.placeShip(["J6", "J7", "J8"]);

/* creating an ai */
const ai = new Player();
ai.gameboard.placeShip(["A3", "A4"]);

createPlayerBoard(10, player);
createAIBoard(10, ai);


handlePlayerPick(ai, player)