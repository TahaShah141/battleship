import { getHeader, getFooter, newElement, newInput, newPara} from "./domStuff";
import { defaultGameboard } from "./gameboard-class";

class SetupBoard {
    constructor() {
        this.gameboard = defaultGameboard();
        this.dom = this.getSetupBoard();
        this.shipPicked = false;
        this.shipInfo = {};
    }

    getSetupBoard() {
        let board = newElement("div", "setup-board");

        board.addEventListener("mouseleave", () => this.leftBoard());
    
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                let cell = newElement("div", "setup-cell");
    
                cell.dataset.row = row;
                cell.dataset.col = col;
                
                if (this.gameboard.board[col][row]) cell.classList.add("ship-segment");

                cell.addEventListener("mouseleave", () => this.setupCellLeft(cell));
                cell.addEventListener("mouseenter", () => this.setupCellEnter(cell));
                
                cell.addEventListener("click", () => this.setupCellClicked(cell));
                cell.addEventListener("contextmenu", (e) => this.setupCellRightClicked(e, cell));
    
                board.appendChild(cell);
            }
        }
    
        return board;
    }

    leftBoard() {
        if (!this.shipPicked) return;
        this.showShip(this.shipInfo.ship, this.shipInfo.prevShow.x, this.shipInfo.prevShow.y);
    }

    setupCellClicked(cell) {

        console.log("click");

        if (!this.shipPicked) this.pickupShip(cell); 
        else this.dropShip(cell);
    }

    setupCellRightClicked(e, c) {
        e.stopPropagation();
        e.preventDefault();

        console.log("right click");
        let cell = getCellInfo(c);
        if (!this.shipPicked) {
            let segment = this.gameboard.board[cell.x][cell.y];
            let ship = segment.parent;
            if (ship.length === 1) return;
            let shipX = ship.segments[0].x;
            let shipY = ship.segments[0].y;
            this.gameboard.removeShip(ship);

            this.removeShip(ship, shipX, shipY);
            
            ship.flip();
            if (!this.gameboard.shipFits(ship, shipX, shipY)) ship.flip(); 
            
            this.gameboard.addShip(ship, shipX, shipY);
            this.showShip(ship, shipX, shipY);
        } else {
            let ship, shipX, shipY;
            let shipCoords = this.getShipInfo(cell.x, cell.y);
            ship = shipCoords.ship;
            shipX = shipCoords.x;
            shipY = shipCoords.y;   
            
            this.removeShip(ship, shipX, shipY);
            
            ship.flip();
            if (!this.gameboard.shipFits(ship, shipX, shipY)) ship.flip(); 

            this.showShip(ship, shipX, shipY);
        }
    }

    pickupShip(c) {
        let cell = getCellInfo(c);

        let segment = this.gameboard.board[cell.x][cell.y];

        if (!segment) return;

        let ship = segment.parent;

        this.shipInfo.offset = ship.segments.indexOf(segment);

        let shipX = ship.segments[0].x;
        let shipY = ship.segments[0].y;

        this.shipInfo.prevShow = {x: shipX, y: shipY};
        this.shipInfo.ship = ship;

        this.shipPicked = true;

        this.gameboard.removeShip(ship, shipX, shipY);
    }

    dropShip(c) {
        let cell = getCellInfo(c);

        let ship, shipX, shipY;
        let shipCoords = this.getShipInfo(cell.x, cell.y);
        ship = shipCoords.ship;
        shipX = shipCoords.x;
        shipY = shipCoords.y;

        this.gameboard.addShip(ship, shipX, shipY);
        this.shipPicked = false;
        this.shipInfo = {};
    }

    setupCellLeft(c) {
        if (!this.shipPicked) return;

        let cell = getCellInfo(c);

        let ship, shipX, shipY;
        let shipCoords = this.getShipInfo(cell.x, cell.y);
        ship = shipCoords.ship;
        shipX = shipCoords.x;
        shipY = shipCoords.y;
        
        this.removeShip(ship, shipX, shipY);
    }

    setupCellEnter(c) {
        if (!this.shipPicked) return;

        let cell = getCellInfo(c);
        
        let ship, shipX, shipY;
        let shipCoords = this.getShipInfo(cell.x, cell.y);
        ship = shipCoords.ship;
        shipX = shipCoords.x;
        shipY = shipCoords.y;

        if (this.gameboard.shipFits(ship, shipX, shipY)) {
            this.removeShip(ship, this.shipInfo.prevShow.x, this.shipInfo.prevShow.y)
            this.showShip(ship, shipX, shipY);
        } else this.showShip(ship, this.shipInfo.prevShow.x, this.shipInfo.prevShow.y);
    }

    showShip(ship, x, y) {
        let dx = ship.horizontal ? 1 : 0;
        let dy = ship.horizontal ? 0 : 1;
    
        for (let i = 0; i < ship.length; i++) {
            let cell = getCell(x+dx*i, y+dy*i);
            cell.classList.add("ship-segment")
        }

        if (this.shipPicked) {
            this.shipInfo.prevShow.x = x;
            this.shipInfo.prevShow.y = y;
        }
    }

    
    removeShip(ship, x, y) {
    
        let dx = ship.horizontal ? 1 : 0;
        let dy = ship.horizontal ? 0 : 1;

        for (let i = 0; i < ship.length; i++) {
            let X = x+dx*i;
            let Y = y+dy*i;
            let cell = getCell(X, Y);
            if (cell && !(this.gameboard.board[X][Y])) cell.classList.remove("ship-segment");
            else return;
        }
    }

    getShipInfo(x, y) {
        let ship = this.shipInfo.ship;

        let dx = ship.horizontal ? 1 : 0;
        let dy = ship.horizontal ? 0 : 1;

        let shipX = x-this.shipInfo.offset*dx;
        let shipY = y-this.shipInfo.offset*dy;

        return {ship, x: shipX, y: shipY}
    }
}

function getCellInfo(cell) {
    let x = cell.dataset.col;
    let y = cell.dataset.row;

    return {x, y}
}

function getCell(x, y) {
    return document.querySelector(`.setup-cell[data-col="${x}"][data-row="${y}"]`)
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

    let setupBoard = new SetupBoard();
    let board = setupBoard.dom;
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