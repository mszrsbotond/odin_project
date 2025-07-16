import "./style.css";

import { createAIBoard, createPlayerBoard } from "./createBoards";
import { Player } from "./setup";
import { handlePlayerPick } from "./handlePlayerPick";
import { placeAllShips } from "./shipPlacementPlayer";

/* creating a player */
const player = new Player("player");

/* creating an ai */
const ai = new Player("ai");

createPlayerBoard(10, player);
createAIBoard(10, ai);


placeAllShips(ai)

const button = document.querySelector("button");
button.addEventListener("click", () => {
  location.reload();
});


placeAllShips(player);
handlePlayerPick(ai, player);
