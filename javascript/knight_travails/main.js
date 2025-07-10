class knightTravails {
  constructor() {}

  knightMoves(start, end) {
    let possibleMoves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];

    // storing the places on the board i already visited, its a Set to make it available for the has check
    let visited = new Set();
    let queue = [[start[0], start[1]]];
    let steps = 0;

    while (queue.length) {
      let next = [];
      let current;
      while (queue.length) {
        current = queue.shift();

        let currentX = current[0];
        let currentY = current[1];

        if (currentX === end[0] && currentY === end[1]) {
          console.log(end)
          return steps;
        }

        for (let move of possibleMoves) {
          let nextX = currentX + move[0];
          let nextY = currentY + move[1];

          if (!visited.has([nextX + "," + nextY]) && nextX < 8 && nextY < 8 && nextX > -1 && nextY > -1) {
            visited.add([nextX + "" + nextY]);
            next.push([nextX, nextY]);
          }
        }
      }
      steps++;
      console.log(current)
      queue = next;
    }
  }
}

let knight = new knightTravails();
console.log(knight.knightMoves([0,0], [3,3]));



