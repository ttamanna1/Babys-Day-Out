// ! ELEMENTS

// grid
// cells

const grid = document.querySelector('.grid')
const cells = []
const startButton = document.getElementById('startButton')

// ! VARIABLES

// set game score (if different levels added)
// set lives to 5
// set starting position of frog as const
// set initial position of each obstacle




let babyLives = 5

const babyStartPosition = 45
let currentPosition = babyStartPosition

const car1Positions = [28, 29, 31, 32]
const car2Positions = [15, 17, 19]
const vanPositions = [7, 9, 10, 12, 13]
const cyclistPositions = [35, 38, 41]

// ! GRID

// create grid
// 7*7 grid- set width
// frog and obstacles on grid

const width = 7
const cellCount = width * width 

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.innerText = i
    cell.id = i
    cell.style.width = `${100 / width}%`
    cell.style.height = `${100 / width}%`
    grid.appendChild(cell)
    cells.push(cell)
  }
  addBaby(currentPosition)

  addCar1Obstacles();
  addCar2Obstacles();
  addVanObstacles();
  addCyclistObstacles();

}

// ! EXECUTIONS

// * main game loop (setInterval) when lives are greater than 0- use keypress event using user input
  // up arrow key pressed- move frog up by one cell except if frog is home
  // down arrow key pressed move frog down by one cell if not in starting position
  // left/right key pressed- move frog left/right by one cell if not at end of grid
// function to move obstacles- need timers
// * check if frog collides with obstacles (function to check collisions)- restart frog in starting position and lose one life 
  // game loop continues/ game is not reset
// check if frog reaches home and update score
// check if frog runs out of lives
// end game loop if frog runs out of lives or if frog reaches home and display appropriate message/score
// reset game and load welcome page (timer after message/score display or after click event on message/score display?)
// * if different levels are added and the frog reaches home, the game shouldn't be reset but a new loop should be passed through
  // making the obstacles move faster using timers and/or possibly creating a bigger grid to make it more challenging
// Function to create the baby and obstacles on the grid

function addBaby() {
  cells[currentPosition].classList.add('baby')
}

function removeBaby(){
  cells[currentPosition].classList.remove('baby')
}



function keyPress(evt){
  const key = evt.code

  removeBaby()

  if (key === 'ArrowUp' && currentPosition >= width) {
    currentPosition -= width
  } else if (key === 'ArrowDown' && currentPosition + width < cells.length) {
    currentPosition += width
  } else if (key === 'ArrowLeft' && currentPosition % width !== 0) {
    currentPosition--
  } else if (key === 'ArrowRight' && currentPosition % width !== width - 1) {
    currentPosition++
  }

  addBaby()
}

// Create functions to add obstacles
function addCar1Obstacles() {
  car1Positions.forEach((position) => {
    const car1 = document.createElement('div');
    car1.classList.add('car1');
    const cellElement = document.getElementById(position);
    cellElement.appendChild(car1);
  });
}

function addCar2Obstacles() {
  car2Positions.forEach((position) => {
    const car2 = document.createElement('div');
    car2.classList.add('car2');
    const cellElement = document.getElementById(position);
    cellElement.appendChild(car2);
  });
}

function addVanObstacles() {
  vanPositions.forEach((position) => {
    const van = document.createElement('div');
    van.classList.add('van');
    const cellElement = document.getElementById(position);
    cellElement.appendChild(van);
  });
}

function addCyclistObstacles() {
  cyclistPositions.forEach((position) => {
    const cyclist = document.createElement('div');
    cyclist.classList.add('cyclist');
    const cellElement = document.getElementById(position);
    cellElement.appendChild(cyclist);
  });
}





// ! EVENTS

// click start button function
// keypress event function


// ! PAGE LOAD

// * Welcome Page
  // display welcome page with instructions on how to play the game
// * Start Button
  // pressing start button removes welcome page, creates grid and starts game loop
  // start button is disabled when game loop starts and enabled when game loop ends and is reset
// * Features
  // music, sound effects, transitions.

document.addEventListener('keydown', keyPress)

createGrid()

