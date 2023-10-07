//まずはゲームボード

const gameBoard = (() => {
    const gameboard = new Array(9);
    return {gameboard}
})()

//次はプレイヤー

const Player = name => {
    const sayName = () => console.log(name);
    return {name} 
}

const form = document.getElementById('modeSelect');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});

function getMode() {
    const option = document.getElementById('mode');
    const playerOption = option.value;
    const button = document.querySelector('.playBtn');
    const restart = document.querySelector('.restartBtn');
    button.style.display = 'none';
    restart.style.display = 'block';

    if (playerOption === 'pvp') {
        playPvP()
    }
    else {
        playPvE()
    }
};

function restart() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.innerHTML = '')
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');

function playPvP() {
    //
    left.textContent = 'Player 1';
    right.textContent = 'Player 2';
    right.classList.add('notPlaying');
}

function playPvE() {
    //
}

function addChoice() {
    if (this.innerHTML === '') {
        if (left.classList.contains('notPlaying')) {
            const circle = document.createElement('i');
            circle.className = 'bx bx-x';
            this.appendChild(circle);
            right.classList.toggle('notPlaying');
            left.classList.toggle('notPlaying');
        }
        else {
            const circle = document.createElement('i');
            circle.className = 'bx bx-radio-circle';
            this.appendChild(circle);
            right.classList.toggle('notPlaying');
            left.classList.toggle('notPlaying');
        }
    }
}

const container = document.querySelector('.container');
for (let i = 0; i < 9; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.textContent = gameBoard.gameboard[i];
    container.appendChild(block);
};

const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => block.addEventListener('click', addChoice))
