# 🎮 Tic Tac Toe
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

A classic two-player Tic Tac Toe game built with vanilla HTML, CSS and JavaScript — created as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

---

## ✨ Features

- 🎯 Two-player turn-based gameplay (X vs O)
- 🏆 Win detection across all rows, columns and diagonals
- 🤝 Draw detection when the board is full
- 🔄 Restart button to reset the game at any time
- 🌑 Dark industrial theme with animated markers

---

## 🧠 Concepts Practiced

This project was built to practice and solidify the following JavaScript concepts:

| Concept | How it was used |
|---|---|
| Factory Functions | `createPlayer()` to create player objects |
| IIFE | `gameBoard`, `game`, and `gameController` modules |
| Module Pattern | Separating concerns across three distinct modules |
| Closures | Keeping board state and current player private |
| DOM Manipulation | Dynamically creating and updating board buttons |
| Event Listeners | Handling cell clicks and restart button |
| Array Methods | `every()` and `some()` for win/draw detection |
| Data Attributes | Linking each button to its board index via `data-index` |

---

## 🚀 How to Use

1. Clone the repository:
```bash
git clone https://github.com/srikardh/TicTacToe.git
```

2. Open `index.html` in your browser — no build tools or dependencies needed!

3. **Player 1** is X, **Player 2** is O — click any empty cell to place your marker

4. First to get **3 in a row** (horizontally, vertically, or diagonally) wins

5. Click **Restart Game** to play again

---

## 📁 Project Structure

```
TicTacToe/
├── index.html       # Game markup
├── Stylesheet.css   # Styles and dark theme
└── tictactoe.js     # Game logic and DOM controller
```

---

## 🛣️ What I Learned

This was my first project using the Module Pattern and IIFEs to properly structure JavaScript. Key takeaways:

- Why encapsulation matters — keeping game state private and only exposing what's needed
- The difference between factory functions and constructors
- How to separate concerns cleanly: board state, game logic, and UI are all independent
- Why placing `<script>` at the bottom of `<body>` matters for DOM access

---

## 🔮 Future Improvements

- [ ] Add an AI opponent with minimax algorithm
- [ ] Let players enter custom names before the game starts
- [ ] Add score tracking across multiple rounds
- [ ] Highlight the winning combination of cells
- [ ] Make it fully responsive on mobile

---

## 👤 Author

**Srikar** — learning web development through [The Odin Project](https://www.theodinproject.com/)

> *"The best way to learn is to build."*
