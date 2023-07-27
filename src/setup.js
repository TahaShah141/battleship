import { getHeader, getFooter, newElement, newInput, clearScreen, setupLayout} from "./domStuff";
import { defaultGameboard, getRandomBoard } from "./gameboard-class";
import { startGame } from "./gameloop";

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

        this.removeShip(ship, shipX, shipY);
        this.showShip(ship, shipX, shipY);
    }

    dropShip(c) {
        let cell = getCellInfo(c);

        let ship, shipX, shipY;
        let shipCoords = this.getShipInfo(cell.x, cell.y);
        ship = shipCoords.ship;
        shipX = shipCoords.x;
        shipY = shipCoords.y;

        if (!this.gameboard.shipFits(ship, shipX, shipY)) {
            this.removeShip(ship, shipX, shipY);
            shipX = this.shipInfo.prevShow.x;
            shipY = this.shipInfo.prevShow.y;
        } 

        this.gameboard.addShip(ship, shipX, shipY);
        this.shipPicked = false;
        this.shipInfo = {};

        this.removeShip(ship, shipX, shipY);
        this.showShip(ship, shipX, shipY);
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
            cell.classList.add("ship-segment");
            if (this.shipPicked) cell.classList.add("selected");
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
            if (cell && !(this.gameboard.board[X][Y])) {
                cell.classList.remove("ship-segment");
                cell.classList.remove("selected");
            }else if (cell && !this.shipPicked) {
                cell.classList.remove("selected");
            }

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

    loadBoard(gameboard) {
        for (let x = 0; x < 10; x++) 
        for (let y = 0; y < 10; y++) {
            let cell = getCell(x, y);
            cell.classList.remove("ship-segment");
            if (gameboard.board[x][y]) cell.classList.add("ship-segment");
        }

        this.gameboard = gameboard;
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

export function getSetupMain() {
    let main = newElement("div", "main");
    let form = getForm();

    players = [];
    main.appendChild(form);
    return main;
}

function getForm(footer) {
    let form = newElement("div", "startup-form");

    let title = newElement("h3", "form-title");
    title.textContent = "Setup";

    let inputContainer = newInput("Player Name");

    let boardNbuttons = newElement("div", "setup-container");

    let setupBoard = new SetupBoard();
    let board = setupBoard.dom;
    let buttons = getSetupButtons(setupBoard);

    boardNbuttons.appendChild(board);
    boardNbuttons.appendChild(buttons);
    
    if (!footer) {
        footer = newElement("div", "form-footer", "center");
        footer.textContent = "Click a ship to move/place it. Right Click on a ship to rotate it";
    }

    form.appendChild(title);
    form.appendChild(document.createElement("hr"));
    form.appendChild(inputContainer);
    form.appendChild(boardNbuttons);
    form.appendChild(footer);

    return form;
}

function getSetupButtons(setupBoard) {
    let buttons = newElement("div", "setup-buttons");
    let resetButton = newElement("button", "setup-button", "reset");
    let randomizeButton = newElement("button", "setup-button", "randomize");
    let confirmButton = newElement("button", "setup-button", "confirm");

    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => setupBoard.loadBoard(defaultGameboard()));
    randomizeButton.textContent = "Randomize";
    randomizeButton.addEventListener("click", () => setupBoard.loadBoard(getRandomBoard()));
    confirmButton.textContent = "Confirm";
    confirmButton.addEventListener("click", () => formConfirmed(setupBoard));

    buttons.appendChild(resetButton);
    buttons.appendChild(randomizeButton);
    buttons.appendChild(confirmButton);

    return buttons;
}

let players;

function formConfirmed(setupBoard) {
    let nameDom = document.querySelector(".startup-form .input-field");

    let name = nameDom.value;
    
    let gameboard = setupBoard.gameboard;
    
    players.push({name, gameboard});
    
    if (players.length === 2) {
        startGame(players);
    }
    else loadNewForm();
}

function loadNewForm() {
    let main = newElement("div", "main");

    let footer = newElement("a", "form-footer", "form-link", "center");
    footer.textContent = "|Play Against a Computer|";
    footer.addEventListener("click", playAgainstComputer); 

    let form = getForm(footer);

    main.appendChild(form);

    setupLayout(main);
}

function playAgainstComputer() {
    let name = "36qTelbFoz";

    let gameboard = getRandomBoard();

    players.push({name, gameboard});

    startGame(players);
}