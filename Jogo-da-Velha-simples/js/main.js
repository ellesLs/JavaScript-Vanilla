const arraySquares = Array(9).fill(null);
const container = document.querySelector('.board');
const jogadorAtual = document.querySelector('.jogador');
const reset = document.querySelector('.btn-reset');
const containerMoves = document.querySelector('.container-moves');
const backMove = document.querySelector('.back');
backMove.disabled = true;
const xImg = '../img/X.png';
const circleImg = '../img/circle.png';
const moves = [];
let isXnext = true;
let whoIsWinner = '';
let count = 0;


arraySquares.forEach((squares, index, array) => {
    
    let boxSquares = document.createElement('div');
    boxSquares.classList.add('box');
    boxSquares.innerHTML = squares;
    container.appendChild(boxSquares);

    boxSquares.addEventListener('click', () => {
        if(whoIsWinner) return;
        if(!array[index]) {
            array[index] = whosIsNext();
            moves.push(index);
            boxSquares.innerHTML = `<img class="playerImg" src='${array[index] === 'X' ? xImg : circleImg}' />`;
            
            const move = document.createElement('p');
            move.classList.add('player-turn');
            move.innerHTML = array[index] + ' fez a jogada!';
            containerMoves.appendChild(move);
            
            const winner = calculateWinner(array);
            
            if(winner) {
                jogadorAtual.innerHTML = `<strong class="winner">${winner}</strong> Venceu!`;
                whoIsWinner = winner;
            } else {
                jogadorAtual.innerHTML = `Next Player é ${isXnext ? 'X' : 'O'}`;    
            }
            count++;
            if(!winner && count >= 9) jogadorAtual.innerHTML = 'Deu Velha';
        } else { 
            return;
        }
        backMove.disabled = false;
    });
});


reset.addEventListener('click', () => {
    arraySquares.fill(null);
    whoIsWinner = '';
    isXnext = true;
    count = 0;
    moves.splice(0, moves.length)
    backMove.disabled = true;
    jogadorAtual.innerHTML = `Next Player é ${(isXnext) ? 'X' : 'O'}`;
    arraySquares.forEach((square, index) => {
        document.querySelectorAll('.box')[index].innerHTML = square;
    });
    containerMoves.querySelectorAll('p').forEach((move) =>  move.remove());
});

backMove.addEventListener('click', () => {
    
    if(moves.length > 0) {
        const box = document.querySelectorAll('.box');
        const msgPlayer = document.querySelectorAll('.player-turn');
        arraySquares.forEach((_, index, array) => {
            if(index === moves[moves.length -1]) {
                array[moves[moves.length-1]] = null;
                box[moves[moves.length-1]].innerHTML = '';
                msgPlayer[msgPlayer.length -1].remove();
            }
        })

        moves.pop();
        isXnext = !isXnext;
        jogadorAtual.innerHTML = `Next Player é ${isXnext ? 'X' : 'O'}`; 
        count--;
        if(whoIsWinner) {
            whoIsWinner = '';
        }
    } 
    if(moves.length === 0) {
        backMove.disabled = true;
    }
})

function whosIsNext() {
    const next =`${isXnext ? 'X' : 'O' }` 
    isXnext = !isXnext;
    return next;
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}



