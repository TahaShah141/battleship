import { defaultGameboard } from "./gameboard-class";

function newElement(tag, ...classes) {
    let element = document.createElement(tag);
    classes.forEach(cls => element.classList.add(cls));

    return element;
}

function newPara(text, ...classes) {
    let para = newElement("p", ...classes);
    para.textContent = text;

    return para;
}

function newInput(placeholderText) {
    let container = newElement("div", "input-container", "center");

    let label = newElement("label", "input-label");
    label.textContent = placeholderText;
    let input = newElement("input", "input-field");
    input.placeholder = placeholderText;

    container.appendChild(input);
    container.appendChild(label);

    return container;
}

export function initLayout() {
    const body = document.body;

    const header = getHeader();
    const main = getMain();
    const footer = getFooter();


    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
}

function getHeader() {
    let header = newElement("header", "header", "center");

    let title = newElement("h1", "header-title");
    title.textContent = "Battleship";

    header.appendChild(title);
    return header;
}

function getMain() {
    let main = newElement("div", "main");
    let playerView1 = getPlayerView(1);
    let playerView2 = getPlayerView(2);

    main.appendChild(playerView1);
    main.appendChild(playerView2);
    return main;
}

function getPlayerView(i) {
    let playerView = newElement("div", "player-view", "center");
    let name = newPara(`Player ${i}`, "player-name");
    let board = getBoard(i);
    playerView.appendChild(name);
    playerView.appendChild(board);

    return playerView;
}

function getBoard(i) {
    let board = newElement('div', 'board', `player${i}-board`);

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
                cell.addEventListener("click", () => cellClicked(i-1, col-1, row-1));
            }
            board.appendChild(cell);
        }
    }
    board.firstChild.classList.add("cell-heading");
    return board;
}

function cellClicked(board, x, y) {
    console.log(`board ${board} clicked at ${x},${y}`);
}

function getFooter() {
    let footer = newElement("footer", "footer", "center");
    let text = "Copyright © Taha Shah 2023";

    footer.appendChild(newPara(text));
    return footer;
}


export function setupLayout() {
    const body = document.body;

    const header = getHeader();
    const main = getSetupMain();
    const footer = getFooter();

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
}

function getSetupMain() {
    let main = newElement("div", "main");
    let form = newElement("div", "startup-form");

    let title = newElement("h3", "form-title");
    title.textContent = "Setup";

    let inputContainer = newInput("Player Name");

    let boardNbuttons = newElement("div", "setup-container");

    let board = getSetupBoard(1);
    let buttons = getSetupButtons();

    boardNbuttons.appendChild(board);
    boardNbuttons.appendChild(buttons);

    form.appendChild(title);
    form.appendChild(document.createElement("hr"));
    form.appendChild(inputContainer);
    form.appendChild(boardNbuttons);

    main.appendChild(form);
    return(main);
}

function getSetupBoard(i) {
    let board = newElement("div", "setup-board");
    let gameboard = defaultGameboard();

    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            let cell = newElement("div", "setup-cell");

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
                cell.dataset.row = row-1;
                cell.dataset.col = col-1;

                if (gameboard.board[col-1][row-1]) {
                    let segment = gameboard.board[col-1][row-1];
                    cell.classList.add("ship-segment");
                    cell.addEventListener("mousedown", (e) => setupCellPicked(e, gameboard, segment));
                }
                cell.addEventListener("mouseenter", () => mouseEnteredSetupCell(gameboard, col-1, row-1));
                cell.addEventListener("mouseleave", () => mouseLeftSetupCell(gameboard, col-1, row-1));
                cell.addEventListener("mouseup", (e) => setupCellDropped(e, gameboard, col-1, row-1));
            }
            board.appendChild(cell);
        }
    }
    board.firstChild.classList.add("cell-heading");


    return board;
}

let shipPicked = false;
let shipInfo = {};

function setupCellPicked(e, gameboard, segment) {
    e.stopPropagation();
    let ship = segment.parent;
    shipInfo.ship = ship;
    shipPicked = true;
    shipInfo.segmentClicked = segment;
    
    let cells = [];
    ship.segments.forEach(seg => {
        cells.push(document.querySelector(`.setup-cell[data-col="${seg.x}"][data-row="${seg.y}"]`));
    })
    
    shipInfo.cells = cells;
    console.log(cells);
    shipInfo.offset = ship.segments.indexOf(segment);

    shipInfo.prevShow = {x: ship.segments[0].x, y: ship.segments[0].y};

    gameboard.removeShip(ship);
}

function setupCellDropped(e, gameboard, x, y) {
    e.stopPropagation();
    if (!shipPicked) return;

    let ship = shipInfo.ship;
    
    let dx = ship.horizontal ? 1 : 0;
    let dy = ship.horizontal ? 0 : 1;

    let shipX = x-shipInfo.offset*dx;
    let shipY = y-shipInfo.offset*dy;

    if (!gameboard.shipFits(ship, shipX, shipY)) return;

    for (let i = 0; i < ship.length; i++) {
        let cell = document.querySelector(`.setup-cell[data-col="${shipX+dx*i}"][data-row="${shipY+dy*i}"]`);
        cell.addEventListener("mousedown", (e) => setupCellPicked(e, gameboard, gameboard.board[shipX+dx*i][shipY+dy*i]));
        shipInfo.cells[i].removeEventListener("mousedown", (e) => setupCellPicked(e, gameboard, segment));
    }

    gameboard.addShip(ship, shipX, shipY);
    shipPicked = false;
    shipInfo = {};
}

function mouseEnteredSetupCell(gameboard, x, y) {
    if (!shipPicked) return;

    console.log("entered");

    let ship = shipInfo.ship;

    let dx = ship.horizontal ? 1 : 0;
    let dy = ship.horizontal ? 0 : 1;

    let shipX = x-shipInfo.offset*dx;
    let shipY = y-shipInfo.offset*dy;

    if (gameboard.shipFits(ship, shipX, shipY)) {
        removeShip(gameboard, ship, shipInfo.prevShow.x, shipInfo.prevShow.y)
        showShip(ship, shipX, shipY);
    } else showShip(ship, shipInfo.prevShow.x, shipInfo.prevShow.y);
}

function showShip(ship, x, y) {
    let dx = ship.horizontal ? 1 : 0;
    let dy = ship.horizontal ? 0 : 1;

    for (let i = 0; i < ship.length; i++) {
        let cell = document.querySelector(`.setup-cell[data-col="${x+dx*i}"][data-row="${y+dy*i}"]`);
        cell.classList.add("ship-segment")
    }
    
    shipInfo.prevShow.x = x;
    shipInfo.prevShow.y = y;
}

function mouseLeftSetupCell(gameboard, x, y) {
    if (!shipPicked) return;

    let ship = shipInfo.ship;

    let dx = ship.horizontal ? 1 : 0;
    let dy = ship.horizontal ? 0 : 1;

    let shipX = x-shipInfo.offset*dx;
    let shipY = y-shipInfo.offset*dy;

    removeShip(gameboard, ship, shipX, shipY);
}

function removeShip(gameboard, ship, x, y) {
    
    let dx = ship.horizontal ? 1 : 0;
    let dy = ship.horizontal ? 0 : 1;

    for (let i = 0; i < ship.length; i++) {
        let cell = document.querySelector(`.setup-cell[data-col="${x+dx*i}"][data-row="${y+dy*i}"]`);
        if (cell && !(gameboard.board[x+dx*i][y+dy*i])) cell.classList.remove("ship-segment");
        else return;
    }

}


function getSetupButtons() {
    let buttons = newElement("div", "setup-buttons");
    let resetButton = newElement("button", "setup-button", "reset");
    let randomizeButton = newElement("button", "setup-button", "randomize");
    let confirmButton = newElement("button", "setup-button", "confirm");

    resetButton.textContent = "Reset";
    randomizeButton.textContent = "Randomize";
    confirmButton.textContent = "Confirm";

    buttons.appendChild(resetButton);
    buttons.appendChild(randomizeButton);
    buttons.appendChild(confirmButton);

    return buttons;
}