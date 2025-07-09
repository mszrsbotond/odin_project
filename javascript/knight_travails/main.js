function buildBoard() {
  let board = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push([i, j]);
    }
  }
  return board;
}

function knightMoves(from, to) {
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
}

/* function bfs(graph, node){
    let visited = []
    let queue = []

    visited.push(node)
    queue.push(node)

    while(queue.length > 0){
        s = queue.shift()
        console.log(s)
        console.log(visited)
        console.log(queue)
        for(n of graph[s]){
            if(!visited.includes(n)){
                visited.push(n)
                queue.push(n)
            }
        }
    }
} */
