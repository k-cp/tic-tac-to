//まずはゲームボード

const gameBoard = {
    gameboard : new Array(9)
}

//次はプレイヤー

const Player = name => {
    const sayName = () => console.log(name);
    return {name} 
}

const container = document.querySelector('.container');
for (let i = 0; i < 0; i++) {
    const block = document.createElement('div');
    block.textContent = gameBoard.gameboard[i];
    container.appendChild(block);
};