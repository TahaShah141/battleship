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