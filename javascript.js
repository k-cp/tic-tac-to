//まずはゲームボード



const gameBoard = (() => {
    board = new Array(9);

    const createBoard = () => {
        const container = document.querySelector('.container');
        for (let i = 0; i < 9; i++) {
            let block = document.createElement('div');
            block.classList.add('block');
            block.classList.add(`${i}`);
            block.textContent = board[i];
            container.appendChild(block);
        };
        const blocks = document.querySelectorAll('.block');
        blocks.forEach((block) => block.addEventListener('click', addChoice));
        const button = document.querySelector('.restartBtn');
        button.addEventListener('click', restart);
    };
    const restart = () => {
        event.preventDefault();
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => block.innerHTML = '');
        gameBoard.getMode();
    }

    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const playPvP = () => {
        left.textContent = 'Player 1';
        right.textContent = 'Player 2';
        if (!right.classList.contains('notPlaying')) {
            left.classList.remove('notPlaying');
            right.classList.add('notPlaying');
        }
        console.log('pvp');
    }

    const playPvE = () =>{
        left.textContent = 'Player 1';
        right.textContent = 'AI';
        if (!right.classList.contains('notPlaying')) {
            left.classList.remove('notPlaying');
            right.classList.add('notPlaying');
        }
        console.log('pve')
    }

    const getMode =  () => {
        const option = document.getElementById('mode');
        const playerOption = option.value;
    
        if (playerOption === 'pvp') {
            playPvP()
        }
        else {
            playPvE()
        }
    };

    const addChoice = (event) => {
        const board = document.querySelector('.container');
        const left = document.querySelector('.left');
        const right = document.querySelector('.right'); 
        const classString = event.currentTarget.getAttribute('class').split(' ')
        if (!board.classList.contains('playing')) {
            board.classList.toggle('playing');
            gameBoard.getMode();
        };
        if (event.currentTarget.innerHTML === '') {
            if (left.classList.contains('notPlaying')) {
                const cross = document.createElement('i');
                cross.className = 'bx bx-x';
                event.currentTarget.appendChild(cross);
                right.classList.toggle('notPlaying');
                left.classList.toggle('notPlaying');
                board[classString[1]] = 'X';
            }
            else {
                const circle = document.createElement('i');
                circle.className = 'bx bx-radio-circle';
                event.currentTarget.appendChild(circle);
                right.classList.toggle('notPlaying');
                left.classList.toggle('notPlaying');
                board[classString[1]] = '0';
            }
        }
        //check if win
    }

    const checkWin = () => {
         
    }

    return {createBoard, restart, getMode, addChoice}
})();

//次はプレイヤー

const Player = sign => {
    let _sign = sign
    const sayName = () => _sign;

    return {name} 
}

gameBoard.createBoard();

