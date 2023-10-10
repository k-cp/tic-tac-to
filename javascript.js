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
        board = [];
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
        const container = document.querySelector('.container');
        const left = document.querySelector('.left');
        const right = document.querySelector('.right'); 
        const classString = event.currentTarget.getAttribute('class').split(' ');
        let player = null;
        if (!container.classList.contains('playing')) {
            container.classList.toggle('playing');
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
                player = 2;
            }
            else {
                const circle = document.createElement('i');
                circle.className = 'bx bx-radio-circle';
                event.currentTarget.appendChild(circle);
                right.classList.toggle('notPlaying');
                left.classList.toggle('notPlaying');
                board[classString[1]] = '0';
                player = 1;
            }
        }
        //check if win
        if (checkWin() === 1 && player !== null) {
            right.classList.toggle('notPlaying');
            left.classList.toggle('notPlaying');
            if (player === 1) {
                left.textContent += ' WINS';
                container.classList.toggle('playing');
            }
            else if (player === 2) {
                right.textContent +=  ' WINS';
                container.classList.toggle('playing');
            }
        }

    }

    const checkWin = () => {
         for (let i = 0; i < 3; i++) {
            if ((board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3  + 2]) && board[i * 3] != undefined) {
                return 1
            }
            if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i + 3] != undefined) {
                return 1
            }
         }
         if ((board[0] === board[4] && board[4] === board[8] && board[0] != undefined) || (board[2] === board[4] && board[4] === board[6] && board[2] != undefined)) {
            return 1
         }
         return 0
    }

    return {createBoard, restart, getMode, addChoice}
})();

gameBoard.createBoard()