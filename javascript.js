//まずはゲームボード

const gameBoard = {
    gameboard : new Array(9)
}

//次はプレイヤー

const Player = name => {
    const sayName = () => console.log(name);
    return {name} 
}

function addChoice() {
    if (this.innerHTML === '') {
        const circle = document.createElement('i');
        circle.className = 'bx bx-radio-circle';
        this.appendChild(circle);
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
