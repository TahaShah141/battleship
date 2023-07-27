
export function newElement(tag, ...classes) {
    let element = document.createElement(tag);
    classes.forEach(cls => element.classList.add(cls));

    return element;
}

export function newPara(text, ...classes) {
    let para = newElement("p", ...classes);
    para.textContent = text;

    return para;
}

export function newInput(placeholderText) {
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

export function getHeader() {
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

export function getFooter() {
    let footer = newElement("footer", "footer", "center");
    let text = "Copyright © Taha Shah 2023";

    footer.appendChild(newPara(text));
    return footer;
}


// let shipPicked = false;
// let shipInfo = {};

// function setupCellPicked(e, gameboard, segment) {
//     e.stopPropagation();
//     let ship = segment.parent;
//     shipInfo.ship = ship;
//     shipPicked = true;
//     shipInfo.segmentClicked = segment;
    
//     let cells = [];
//     ship.segments.forEach(seg => {
//         cells.push(document.querySelector(`.setup-cell[data-col="${seg.x}"][data-row="${seg.y}"]`));
//     })
    
//     shipInfo.cells = cells;
//     console.log(cells);
//     shipInfo.offset = ship.segments.indexOf(segment);

//     shipInfo.prevShow = {x: ship.segments[0].x, y: ship.segments[0].y};

//     gameboard.removeShip(ship);
// }

// function setupCellDropped(e, gameboard, x, y) {
//     e.stopPropagation();
//     if (!shipPicked) return;

//     let ship = shipInfo.ship;
    
//     let dx = ship.horizontal ? 1 : 0;
//     let dy = ship.horizontal ? 0 : 1;

//     let shipX = x-shipInfo.offset*dx;
//     let shipY = y-shipInfo.offset*dy;

//     if (!gameboard.shipFits(ship, shipX, shipY)) return;

//     for (let i = 0; i < ship.length; i++) {
//         let cell = document.querySelector(`.setup-cell[data-col="${shipX+dx*i}"][data-row="${shipY+dy*i}"]`);
//         cell.addEventListener("mousedown", (e) => setupCellPicked(e, gameboard, gameboard.board[shipX+dx*i][shipY+dy*i]));
//         shipInfo.cells[i].removeEventListener("mousedown", (e) => setupCellPicked(e, gameboard, segment));
//     }

//     gameboard.addShip(ship, shipX, shipY);
//     shipPicked = false;
//     shipInfo = {};
// }

// function mouseEnteredSetupCell(gameboard, x, y) {
//     if (!shipPicked) return;

//     console.log("entered");

//     let ship = shipInfo.ship;

//     let dx = ship.horizontal ? 1 : 0;
//     let dy = ship.horizontal ? 0 : 1;

//     let shipX = x-shipInfo.offset*dx;
//     let shipY = y-shipInfo.offset*dy;

//     if (gameboard.shipFits(ship, shipX, shipY)) {
//         removeShip(gameboard, ship, shipInfo.prevShow.x, shipInfo.prevShow.y)
//         showShip(ship, shipX, shipY);
//     } else showShip(ship, shipInfo.prevShow.x, shipInfo.prevShow.y);
// }

// function mouseLeftSetupCell(gameboard, x, y) {
//     if (!shipPicked) return;

//     let ship = shipInfo.ship;

//     let dx = ship.horizontal ? 1 : 0;
//     let dy = ship.horizontal ? 0 : 1;

//     let shipX = x-shipInfo.offset*dx;
//     let shipY = y-shipInfo.offset*dy;

//     removeShip(gameboard, ship, shipX, shipY);
// }



