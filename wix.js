// currying - implement multiply func
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
const result = double(5);
console.log(`result=${result}`);

// currying - implement sum func
function sum(a) {
  return function (b) {
    return a + b;
  };
}
const sumFunc = sum(30);
const finalResult = sumFunc(50);
console.log(`sumResult=${finalResult}`);

//debounce method
function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}

// var sw = true;
function handleInput(input) {
  console.log(input);
}

const debouncedHandleInput = debounce(handleInput, 100);
debouncedHandleInput('START');
debouncedHandleInput('END');

function debounceSimpler(func, wait) {
  let timerId;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

//   This implementation accepts two parameters: func, which is the function you want to debounce,
// and wait, which is the time in milliseconds to wait before calling the debounced function.

function myFunction() {
  console.log('Hello, world!');
}

const debouncedFunction = debounce(myFunction, 5000);
debouncedFunction(); // will print "Hello, world!" after 1 second
debouncedFunction(); // will reset the timer
debouncedFunction(); // will reset the timer again
// In this example, myFunction is debounced with a delay of 1 second.
//  The first call to debouncedFunction will print "Hello, world!" after 1 second.
//  The second and third calls will reset the timer, so "Hello, world!" will only be printed once, 1 second after the last call.

// This implementation generates a maze of size width by height using the DFS algorithm. The maze array is initially filled with false values to indicate that all walls are present. We start the DFS algorithm from the top-left corner (i.e., (0, 0)), and mark each cell visited as we explore the maze.

// The dfs function takes two arguments: the current cell position x and y. It first marks the current cell as visited by setting the corresponding element in the maze array to true. Then, it shuffles the directions to explore (i.e., up, down, left, right) and for each direction, it checks if the neighboring cell in that direction is unvisited and within the bounds of the maze. If so, it removes the wall between the current cell and the neighboring cell, and recursively calls dfs on the neighboring cell.

// The shuffle function is a helper function that shuffles the given array in place.
/*
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
*/

function sum(x) {
  return function (y) {
    return x + y;
  };
}

console.log(`sum(2)(3)=${sum(2)(3)}`);
