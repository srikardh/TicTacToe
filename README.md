# Tic Tac Toe

A classic Tic Tac Toe game built with vanilla JavaScript, HTML, and CSS.

## Demo

> Open `index.html` in your browser to play locally.

## Features

- Two-player turn-based gameplay
- Win and draw detection
- Restart button to reset the game
- Responsive dark theme UI

## How to Play

1. Player 1 is **X**, Player 2 is **O**
2. Click any empty cell to place your marker
3. First player to get 3 in a row (horizontally, vertically, or diagonally) wins
4. If all 9 cells are filled with no winner, it's a draw
5. Click **Restart Game** to play again

## Project Structure

```
TicTacToe/
├── index.html       # Game markup
├── Stylesheet.css   # Styles and theme
└── tictactoe.js     # Game logic and DOM control
```

## Built With

- HTML5
- CSS3
- Vanilla JavaScript (Module pattern / IIFEs)

## Concepts Used

- **IIFE (Immediately Invoked Function Expressions)** for encapsulation
- **Module pattern** to separate concerns (game board, game logic, UI controller)
- **Factory functions** for creating player objects
- **DOM manipulation** for rendering the board dynamically
