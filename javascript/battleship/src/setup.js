export class Ship {
  constructor(length, timesOfHit = 0, sunk = false, coordinates = []) {
    this.length = length;
    this.timesOfHit = timesOfHit;
    this.sunk = sunk;
    this.coordinates = coordinates;
  }

  hit() {
    this.timesOfHit += 1;
    this.checkSunk();
  }

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
  }

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

  placeShip(coordinatesOfShip) {
    let newShip = new Ship(3, 0, false, coordinatesOfShip);
    for (let coordinate of newShip.coordinates) {
      for (let i = 0; i < 100; i++) {
        if (coordinate == this.board[i].id) {
          this.board[i].ship = newShip;
        }
      }
    }
  }

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

  allSunk() {
    let hasLiveShip = false;

    for (let i = 0; i < 100; i++) {
      if ((this.board[i].ship != null) && (this.board[i].ship.sunk === false)) {
        hasLiveShip = true;
      }
    }
    return hasLiveShip;
  }
}

export class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.gameboard.createBoard();
  }
}
