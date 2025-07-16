export class Ship {
  constructor(length, timesOfHit = 0, sunk = false, coordinates = []) {
    /* the length of the ship */
    this.length = length;
    /* how many times it was hit */
    this.timesOfHit = timesOfHit;
    /* is it sunk or not */
    this.sunk = sunk;
    /* the coordinates of the ship */
    this.coordinates = coordinates;
  }

  /* adding a hit to the ship */
  hit() {
    this.timesOfHit += 1;
    this.checkSunk();
  }

  /* checking whether its sunk or not */
  checkSunk() {
    if (this.timesOfHit === this.length) {
      this.sunk = true;
    }
    return this.sunk
  }
}

export class Gameboard {
  constructor() {
    this.board = [];
    this.ships = []
  }

  /* creating a board */
  createBoard() {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let letter of letters) {
      for (let number of numbers) {
        this.board.push({
          id: `${letter}${number}`,
          ship: null,
          hit: false,
        });
      }
    }
  }

  /* placing a ship on the board */
  placeShip(coordinatesOfShip) {
    let newShip = new Ship(coordinatesOfShip.length, 0, false, coordinatesOfShip);
    this.ships.push(newShip)
    for (let coordinate of newShip.coordinates) {
      for (let i = 0; i < 100; i++) {
        if (coordinate == this.board[i].id) {
          this.board[i].ship = newShip;
        }
      }
    }
  }

  /* a square on the board receives a hit */
  receiveAttack(coordinate) {
    for (let i = 0; i < 100; i++) {
      if (coordinate == this.board[i].id) {
        this.board[i].hit = true;
        if (this.board[i].ship != undefined) {
          this.board[i].ship.hit();
        }
      }
    }
  }

  /* checking whether all ships are sunk or not */
  allSunk() {
    let allIsSunk = true;

    for (let i = 0; i < 100; i++) {
      if ((this.board[i].ship != null) && (this.board[i].ship.sunk === false)) {
        allIsSunk = false;
      }
    }
    return allIsSunk;
  }
}

/* player */
export class Player {
  constructor(name) {
    this.name = name
    this.gameboard = new Gameboard();
    this.gameboard.createBoard();
  }
}
