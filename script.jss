const cells = document.querySelectorAll('.cell');  
let currentPlayer = 'x';  
let gameState = ['', '', '', '', '', '', '', '', ''];  
const winnerDisplay = document.getElementById('winner');  
const resetButton = document.getElementById('resetButton');  

const winningConditions = [  
    [0, 1, 2],  
    [3, 4, 5],  
    [6, 7, 8],  
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6]  
];  

function handleClick(event) {  
    const index = event.target.getAttribute('data-index');  

    if (gameState[index] !== '' || winnerDisplay.textContent !== '') return;  

    gameState[index] = currentPlayer;  
    event.target.classList.add(currentPlayer);  
    event.target.textContent = currentPlayer === 'x' ? '❌' : '⭕';  

    checkWinner();  
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x'; // Switch player  
}  

function checkWinner() {  
    for (let condition of winningConditions) {  
        const [a, b, c] = condition;  
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {  
            winnerDisplay.textContent = Player ${gameState[a].toUpperCase()} wins!;  
            return;  
        }  
    }  
    if (!gameState.includes('')) {  
        winnerDisplay.textContent = 'It\'s a draw!';  
    }  
}  

function resetGame() {  
    gameState = ['', '', '', '', '', '', '', '', ''];  
    currentPlayer = 'x';  
    winnerDisplay.textContent = '';  
    cells.forEach(cell => {  
        cell.textContent = '';  
        cell.classList.remove('x', 'o');  
    });  
}  

cells.forEach(cell => {  
    cell.addEventListener('click', handleClick);  
});  

resetButton.addEventListener('click', resetGame);
