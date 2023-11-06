// ! ELEMENTS

// grid
// cells

const grid = document.querySelector('.grid')
const startButton = document.getElementById('startButton')



// ! VARIABLES

// set game score (if different levels added)
// set lives to 5
// set starting position of frog as const
// set initial position of each obstacle

const gameContainer = document.createElement('div')
gameContainer.classList.add('game')
document.body.appendChild(gameContainer)

const game = document.querySelector('.game')

const baby = document.createElement('div')
baby.classList.add('baby')
game.appendChild(baby)

const car1 = document.createElement('div')
car1.classList.add('car1')
game.appendChild(car1)

const car2 = document.createElement('div')
car2.classList.add('car2')
game.appendChild(car2);

const van = document.createElement('div')
van.classList.add('van')
game.appendChild(van)

const cyclist = document.createElement('div')
cyclist.classList.add('cyclist')
game.appendChild(cyclist)

let babyCell = 45
let babyLives = 5

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
    grid.append(cell)
  
  }
}

createGrid()
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

  createGrid()