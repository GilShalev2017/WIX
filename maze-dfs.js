// In this example, the MazeSolver class takes a 2D array representing a maze as input,
// with each element of the array representing a cell in the maze.
// Each cell can be either a wall ({ wall: true }) or a path ({ wall: false }).
// The solve method takes a starting cell and an ending cell as input,
// and returns an array representing the solution path from the starting cell to the ending cell.
// The algorithm uses a cellsToVisit to keep track of the cells to visit, and a set to keep the visited cells

class MazeSolver {
  constructor(maze) {
    this.maze = maze;
    this.visited = new Set(); //the values are string of row,col ex: "1,2", "2,2" etc
    this.solution = []; //contains cells objects of type: { row: xxx, col: yyy }
    this.cellsToVisit = [];
  }

  solve(start, end) {
    // Add the starting point to the stack
    this.cellsToVisit.push(start);

    while (this.cellsToVisit.length > 0) {
      // Get the next cell from the stack
      const current = this.cellsToVisit.pop();

      // If the current cell is the end point, we're done
      if (current.row === end.row && current.col === end.col) {
        this.solution.push(current);
        break;
      }

      // If we've already visited this cell, skip it
      if (this.visited.has(`${current.row},${current.col}`)) {
        continue;
      }

      // Mark the current cell as visited
      this.visited.add(`${current.row},${current.col}`);

      // Add the current cell to the solution path
      this.solution.push(current);

      // Visit all the neighbors of the current cell
      const neighbors = this.getFreeNeighbors(current);
      for (const neighbor of neighbors) {
        this.cellsToVisit.push(neighbor);
      }
    }

    return this.solution;
  }

  //return an array of only free cells (which are not walls)
  getFreeNeighbors(cell) {
    const neighbors = [];

    // Check the cell above
    if (cell.row > 0 && !this.maze[cell.row - 1][cell.col].wall) {
      neighbors.push({ row: cell.row - 1, col: cell.col });
    }
    // Check the cell below
    if (cell.row < this.maze.length - 1 && !this.maze[cell.row + 1][cell.col].wall) {
      neighbors.push({ row: cell.row + 1, col: cell.col });
    }
    // Check the cell to the left
    if (cell.col > 0 && !this.maze[cell.row][cell.col - 1].wall) {
      neighbors.push({ row: cell.row, col: cell.col - 1 });
    }
    // Check the cell to the right
    if (cell.col < this.maze[0].length - 1 && !this.maze[cell.row][cell.col + 1].wall) {
      neighbors.push({ row: cell.row, col: cell.col + 1 });
    }
    return neighbors;
  }
}

// Example usage:
// const maze = [
//   [{ wall: true }, { wall: true }, { wall: true }, { wall: true }],
//   [{ wall: false }, { wall: false }, { wall: false }, { wall: true }],
//   [{ wall: true }, { wall: true }, { wall: false }, { wall: true }],
//   [{ wall: true }, { wall: true }, { wall: true }, { wall: true }],
// ];

const maze = [
  [{ wall: true }, { wall: true }, { wall: true }, { wall: true }, { wall: true }],
  [{ wall: false }, { wall: false }, { wall: false }, { wall: true }, { wall: true }],
  [{ wall: true }, { wall: true }, { wall: false }, { wall: true }, { wall: true }],
  [{ wall: true }, { wall: true }, { wall: false }, { wall: false }, { wall: false }],
];

const solver = new MazeSolver(maze);

const start = { row: 1, col: 0 };
// const end = { row: 2, col: 2 };
const end = { row: 3, col: 3 };

const solution = solver.solve(start, end);

console.log(solution);
