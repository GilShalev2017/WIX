function generateMazeDFS(width, height) {
  const maze = Array(height)
    .fill(null)
    .map(() => Array(width).fill(false));

  function dfs(x, y) {
    maze[y][x] = true;
    const directions = shuffle([
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
    ]);
    for (let dir of directions) {
      const nx = x + dir.dx;
      const ny = y + dir.dy;
      if (nx >= 0 && nx < width && ny >= 0 && ny < height && !maze[ny][nx]) {
        maze[y + dir.dy / 2][x + dir.dx / 2] = true;
        dfs(nx, ny);
      }
    }
  }

  dfs(0, 0);
  return maze;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// This will generate a 10x10 maze and print it to the console as a 2D array of true and false values,
// where true indicates a path and false indicates a wall.

const maze = generateMazeDFS(10, 10);

console.log(maze);
