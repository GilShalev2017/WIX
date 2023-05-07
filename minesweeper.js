import React, { useState, useEffect } from 'react';
import './App.css';

const BOARD_SIZE = 10;
const MINE_COUNT = 10;

function App() {
  const [grid, setGrid] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [mines, setMines] = useState([]);
  const [flags, setFlags] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const newMines = generateMines();
    setMines(newMines);
    const newGrid = generateGrid(newMines);
    setGrid(newGrid);
  }, []);

  function generateMines() {
    const mines = [];
    while (mines.length < MINE_COUNT) {
      const randomIndex = Math.floor(Math.random() * BOARD_SIZE * BOARD_SIZE);
      if (!mines.includes(randomIndex)) {
        mines.push(randomIndex);
      }
    }
    return mines;
  }

  function generateGrid(mines) {
    const grid = [];
    for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
      const isMine = mines.includes(i);
      const cell = {
        index: i,
        isMine: isMine,
        isRevealed: false,
        isFlagged: false,
        neighboringMines: countNeighboringMines(i, mines),
      };
      grid.push(cell);
    }
    return grid;
  }

  function countNeighboringMines(index, mines) {
    const neighbors = getNeighborIndices(index);
    const neighboringMines = neighbors.filter(neighbor => mines.includes(neighbor)).length;
    return neighboringMines;
  }

  function getNeighborIndices(index) {
    const indices = [];
    const isLeftEdge = (index % BOARD_SIZE === 0);
    const isRightEdge = (index % BOARD_SIZE === BOARD_SIZE - 1);

    // Top
    if (index >= BOARD_SIZE) {
      indices.push(index - BOARD_SIZE);
    }
    // Top right
    if (!isRightEdge && index >= BOARD_SIZE) {
      indices.push(index - BOARD_SIZE + 1);
    }
    // Right
    if (!isRightEdge) {
      indices.push(index + 1);
    }
    // Bottom right
    if (!isRightEdge && index < BOARD_SIZE * BOARD_SIZE - BOARD_SIZE) {
      indices.push(index + BOARD_SIZE + 1);
    }
    // Bottom
    if (index < BOARD_SIZE * BOARD_SIZE - BOARD_SIZE) {
      indices.push(index + BOARD_SIZE);
    }
    // Bottom left
    if (!isLeftEdge && index < BOARD_SIZE * BOARD_SIZE - BOARD_SIZE) {
      indices.push(index + BOARD_SIZE - 1);
    }
    // Left
    if (!isLeftEdge) {
      indices.push(index - 1);
    }
    // Top left
    if (!isLeftEdge && index >= BOARD_SIZE) {
      indices.push(index - BOARD_SIZE - 1);
    }
    return indices;
  }

  function handleCellClick(index) {
    if (gameOver) {
      return;
    }
    const cell = grid[index];
    if (cell.isFlagged) {
      return;
    }
    if (cell.isMine) {
      revealMines();
      setGameOver(true);
      alert('Game over!');
    } else {
      const newGrid = [...grid];
      revealEmptyCells(index, newGrid);
      newGrid[index].isRevealed = true;
      setGrid(newGrid);
      checkWin(new


        //option II
        /*
        import React, { useState, useEffect } from 'react';

const Board = ({ width, height, mines }) => {
  const [grid, setGrid] = useState([]);
  const [flags, setFlags] = useState(0);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const generateGrid = () => {
      let newGrid = Array(height)
        .fill()
        .map(() => Array(width).fill({ value: 0, revealed: false, flag: false }));

      let minesLeft = mines;
      while (minesLeft > 0) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if (newGrid[y][x].value !== 'mine') {
          newGrid[y][x].value = 'mine';
          minesLeft--;
        }
      }

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (newGrid[y][x].value !== 'mine') {
            const neighbors = getNeighbors(x, y, newGrid);
            const count = neighbors.filter(n => n.value === 'mine').length;
            newGrid[y][x].value = count;
          }
        }
      }

      setGrid(newGrid);
    };

    generateGrid();
  }, [width, height, mines]);

  const getNeighbors = (x, y, grid) => {
    const neighbors = [];
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      for (let xOffset = -1; xOffset <= 1; xOffset++) {
        const xCoord = x + xOffset;
        const yCoord = y + yOffset;
        if (xCoord >= 0 && xCoord < width && yCoord >= 0 && yCoord < height && !(xOffset === 0 && yOffset === 0)) {
          neighbors.push(grid[yCoord][xCoord]);
        }
      }
    }
    return neighbors;
  };

  const handleCellClick = (x, y) => {
    const cell = grid[y][x];
    if (cell.revealed || cell.flag) {
      return;
    }

    if (cell.value === 'mine') {
      revealMines();
      alert('Game over!');
    } else {
      cell.revealed = true;
      setRevealed(revealed + 1);

      if (cell.value === 0) {
        const neighbors = getNeighbors(x, y, grid);
        neighbors.forEach(n => handleCellClick(n.x, n.y));
      }
    }

    checkWin();
  };

  const handleCellRightClick = (event, x, y) => {
    event.preventDefault();
    const cell = grid[y][x];
    if (!cell.revealed) {
      cell.flag = !cell.flag;
      setFlags(flags + (cell.flag ? 1 : -1));
    }
  };

  const revealMines = () => {
    const newGrid = [...grid];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (newGrid[y][x].value === 'mine') {
          newGrid[y][x].revealed = true;
        }
      }
    }
    setGrid(newGrid);
  };

  const checkWin = () => {
    if (revealed === width * height - mines) {
      alert('You win!');
    }
  };

*/