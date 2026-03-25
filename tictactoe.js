function createPlayer(name, marker) {
    return { name, marker };
};

const gameBoard = (() => {
    let board = Array(9).fill('');

    const placeMarker = (index, marker) => {
        board[index] = marker;
    };

    const getBoard = () => board;

    const resetBoard = () => {
        board = Array(9).fill('');
    }

    return { placeMarker, getBoard, resetBoard };

})();

const game = (() => {

    let player1, player2, currentPlayer;

    const startGame = (name1, name2) => {
        player1 = createPlayer(name1, "X");
        player2 = createPlayer(name2, "O");
        currentPlayer = player1;
    }

    const switchTurn = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    };

    const getCurrentPlayer = () => currentPlayer;

    const checkWinner = () => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        const currentboard = gameBoard.getBoard();
        return winConditions.some(([a, b, c]) => {
            return currentboard[a] === currentboard[b] &&
                currentboard[b] === currentboard[c] &&
                currentboard[a] != ''
        });
    };

    const checkDraw = () => {
        const currentboard = gameBoard.getBoard();
        return currentboard.every(cell => cell != '') && !checkWinner();
    };

    const playRound = (index) => {

        const currentboard = gameBoard.getBoard();
        if (currentboard[index] === '') {
            gameBoard.placeMarker(index, currentPlayer.marker);
            if (checkWinner()) {
                //console.log(`${currentPlayer.name} wins!!`);
                return { status: "Winner", player: currentPlayer.name };
            };
            if (checkDraw()) {
                //console.log("Its a draw");
                return { status: "Draw" };
            };
            switchTurn();
            return { status: "continue" };
        };
    };

    return { getCurrentPlayer, playRound, startGame };
})();


const gameController = (() => {

    const boardDiv = document.getElementById("board");
    const playerTurnDiv = document.getElementById("player-turn");
    const messageDiv = document.getElementById("message");
    const startbtn = document.getElementById("startbtn");

    const renderBoard = () => {
        const buttons = boardDiv.querySelectorAll("button");
        const currentBoard = gameBoard.getBoard();
        buttons.forEach(button => {
            button.textContent = currentBoard[button.dataset.index];
        });
        const currentPlayer = game.getCurrentPlayer();
        //playerTurnDiv.textContent = `${currentPlayer.name}'s turn to play`;
        if (currentPlayer) {
            playerTurnDiv.textContent = `${currentPlayer.name}'s turn to play`;
        } else {
            playerTurnDiv.textContent = "";
        }
    }

    for (let i = 0; i < 9; i++) {
        const button = document.createElement("button");
        button.dataset.index = i;
        button.addEventListener("click", () => {
            const result = game.playRound(i);
            renderBoard();
            if (result.status === "Winner") {
                messageDiv.textContent = `${result.player} wins`;
            };
            if (result.status === "Draw") {
                messageDiv.textContent = "It's a Draw";
            }
        });
        boardDiv.appendChild(button);
    };

    startbtn.addEventListener("click", () => {
        document.getElementById("playerNameInput").style.display = "none";
        document.getElementById("GameBoard").style.display = "block";
        const name1 = document.getElementById("player1").value;
        const name2 = document.getElementById("player2").value;
        game.startGame(name1, name2);
        renderBoard();
    })

    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", () => {
        gameBoard.resetBoard();
        messageDiv.textContent = "";
        renderBoard();
    })

    renderBoard();


})();
