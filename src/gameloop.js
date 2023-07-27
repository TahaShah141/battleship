import { setupLayout, newElement, newPara } from "./domStuff";

const hitSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" fill="currentColor"/></svg>';
const missSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-small</title><path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" fill="currentColor"/></svg>';

let players = [];
let currentTurn = 1;

export function startGame(playyas) {
    players = [];
    for (let i = 0; i < playyas.length; i++) {
        players.push(new Player(i, playyas[i].name, playyas[i].gameboard))
    }

    setupLayout(getGameMain(players));
}

class Player {
    constructor(turn, name, gameboard) {
        this.turn = turn;
        this.name = name;
        if (name === "") this.name = `Player ${turn+1}`;
        this.gameboard = gameboard;
    }
}


function getGameMain(players) {
    let main = newElement("div", "main");
    let playerView1 = getPlayerView(players[0]);
    let playerView2 = getPlayerView(players[1]);

    main.appendChild(playerView1);
    main.appendChild(playerView2);
    return main;
}

function getPlayerView(player) {
    let playerView = newElement("div", "player-view", "center");
    let name = newPara(`${player.name}`, "player-name");
    let board = getBoard(player.turn, player.gameboard);
    playerView.appendChild(name);
    playerView.appendChild(board);

    return playerView;
}

function getBoard(turn, gameboard) {
    let board = newElement('div', 'board');

    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            let cell = newElement("div", "cell");

            if (row === 0 && col !== 0) {
                cell.appendChild(newPara(`${String.fromCharCode(64+col)}`));
                cell.classList.add("cell-heading");
                cell.classList.add("center");
            }
            else if (col === 0 && row !== 0) { 
                cell.appendChild(newPara(`${row}`));
                cell.classList.add("cell-heading");
                cell.classList.add("center");
            }
            else if (col !== 0 && row !== 0) {
                cell.dataset.col = col-1;
                cell.dataset.row = row-1;
                cell.dataset.board = turn;
                cell.addEventListener("click", () => cellClicked(turn, gameboard, cell, col-1, row-1));
            }
            board.appendChild(cell);
        }
    }
    board.firstChild.classList.add("cell-heading");
    return board;
}

function cellClicked(turn, gameboard, cell, x, y) {
    console.log("click");
    if (turn !== currentTurn) return;

    if (gameboard.tries[x][y]) return;

    if (gameboard.receiveAttack(x, y)) {
        cell.innerHTML = hitSVG;
        let ship = gameboard.board[x][y].parent;

        if (ship.isSunk()) {
            showShip(turn, ship);
            if (gameboard.allSunk()) gameOver();
        }
    }
    else {
        cell.innerHTML = missSVG;
        currentTurn = (currentTurn + 1) % 2;
    }
}

function showShip(turn, ship) {
    ship.segments.forEach(segment => {
        let cell = getCell(turn, segment.x, segment.y);
        cell.classList.add("sunk");
    })
}

function getCell(turn, x, y) {
    return document.querySelector(`.cell[data-col="${x}"][data-row="${y}"][data-board="${turn}"]`);
}

function gameOver() {
    console.log("gameOver");
}