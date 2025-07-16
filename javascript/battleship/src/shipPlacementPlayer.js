export function placeAllShips(user) {
  generateAndPlaceShip(5, user);
  generateAndPlaceShip(4, user);
  generateAndPlaceShip(3, user);
  generateAndPlaceShip(3, user);
  generateAndPlaceShip(2, user);

  if (user.name == "player") {
    colorBoard(user);
  }
}

function colorBoard(user) {
  /* color the board */
  for (let x = 0; x < 100; x++) {
    if (user.gameboard.board[x].ship != null) {
      let square = document.querySelector(`#${user.gameboard.board[x].id}`);
      square.style["background-color"] = "orange";
    }
  }
}

function generateRandNum(max) {
  return Math.floor(Math.random() * max);
}

function generateAndPlaceShip(length, user) {
  let coordinatesLetterSame = generateLetterSame(length);
  let coordinatesNumSame = generateNumSame(length);

  /* randomly choose letters or numbers same */
  let coordinates;
  if (generateRandNum(10) >= 5) {
    coordinates = coordinatesLetterSame;
  } else {
    coordinates = coordinatesNumSame;
  }

  /* check if theres ship or not on the coordinates we choose */
  for (let x = 0; x < 100; x++) {
    for (let coordinate of coordinates) {
      if (coordinate === user.gameboard.board[x].id) {
        if (user.gameboard.board[x].ship != null) {
          return generateAndPlaceShip(length, user);
        }
      }
    }
  }

  user.gameboard.placeShip(coordinates);
  return coordinates;
}

function generateNumSame(length) {
  /* either the numbers or letters match on a ship placement */
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /* generate out random number */
  let randNumIndex = generateRandNum(10);
  let randNum = numbers[randNumIndex];

  /* making sure they are next to each other */
  /* generate a starting letter */
  let randLetterStartIndex = generateRandNum(10 - length);

  let randLetters = [];
  /* generating the needed amount of letters from it*/
  for (let z = 0; z < length; z++) {
    randLetters.push(letters[randLetterStartIndex + z]);
  }

  /* generate the same num coordinates */
  let coordinatesNumSame = [];
  for (let letter of randLetters) {
    let newRandCoorNum = `${letter}${randNum}`;
    if (coordinatesNumSame.includes(newRandCoorNum)) {
      return generateNumSame(length);
    }
    coordinatesNumSame.push(newRandCoorNum);
  }
  return coordinatesNumSame;
}

function generateLetterSame(length) {
  /* either the numbers or letters match on a ship placement */
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /* the letters match */
  let randLetterIndex = generateRandNum(10);
  let randLetter = letters[randLetterIndex];

  /* making sure they are next to each other */
  /* generate a starting number */
  let randNumStartIndex = generateRandNum(10 - length);

  let randNums = [];
  /* generating the needed amount of letters from it*/
  for (let z = 0; z < length; z++) {
    randNums.push(numbers[randNumStartIndex + z]);
  }

  /* generate the same letter coordinates */
  let coordinatesLetterSame = [];
  for (let number of randNums) {
    let newRandCoorLetter = `${randLetter}${number}`;
    if (coordinatesLetterSame.includes(newRandCoorLetter)) {
      return generateLetterSame(length);
    }
    coordinatesLetterSame.push(newRandCoorLetter);
  }
  return coordinatesLetterSame;
}
