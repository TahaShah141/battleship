const Ship = require('./ship-class')
import { getShips } from './ship-class';

export class Gameboard {
    constructor(n=10) {
        this.board = this.initBoard(n)
        this.tries = [];
        for (let i = 0; i < n; i++) {
            this.tries.push([]);
            for (let j = 0; j < n; j++) {
                this.tries[i].push(false);
            }
        }

        this.ships = [];
    }

    initBoard(n) {
        let board = [];
        for (let x = 0; x < n; x++) {
            board.push([]);
            for (let y = 0; y < n; y++) {
                board[x].push(null);
            }
        }
        return board;
    }

    addShip(ship, x, y) {
        ship.segments = [];
        let dx = ship.horizontal ? 1 : 0;
        let dy = ship.horizontal ? 0 : 1;

        for (let i = 0; i < ship.length; i++) {
            let X = x+i*dx;
            let Y = y+i*dy;
            this.board[X][Y] = ship.addSegment(X, Y);
        }

        this.ships.push(ship);
    }

    receiveAttack(x, y) {
        let attackedShip = false;
        if (this.board[x][y]) {
            this.board[x][y].hit();
            attackedShip = true;
        }
        this.tries[x][y] = true;
        return attackedShip;
    }

    allSunk() {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].sunk) return false;
        }
        return true;
    }

    removeShip(ship) {
        ship.segments.forEach(segment => {
            let x = segment.x;
            let y = segment.y;

            this.board[x][y] = null;
        });

        let index = this.ships.indexOf(ship);
        if (index !== -1) this.ships.splice(index, 1);
    }

    shipFits(ship, x, y) {
        let dx = ship.horizontal ? 1 : 0;
        let dy = ship.horizontal ? 0 : 1;

        for (let offset = 0; offset < ship.length; offset++) {
            let X = x+offset*dx;
            let Y = y+offset*dy;
            if (Y < 0 || Y >= 10 || X < 0 || X >= 10) return false;
            if (this.board[X][Y]) return false;
        }
        return true;
    }

    canAttack(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10 && !this.tries[x][y];
    }
}

export function defaultGameboard() {
    let gameboard = new Gameboard();

    let ships = getShips();

    gameboard.addShip(ships[0], 3, 7);

    gameboard.addShip(ships[1], 1, 5);
    gameboard.addShip(ships[2], 6, 5);

    gameboard.addShip(ships[3], 0, 3);
    gameboard.addShip(ships[4], 4, 3);
    gameboard.addShip(ships[5], 8, 3);
    
    gameboard.addShip(ships[6], 0, 1);
    gameboard.addShip(ships[7], 2, 1);
    gameboard.addShip(ships[8], 7, 1);
    gameboard.addShip(ships[9], 9, 1);

    return gameboard;
}

export function getRandomBoard() {
    let gameboard = new Gameboard();
    let ships = getShips();

    ships.forEach(ship => {
        let x, y;
        let fit;
        do {
            x = Math.floor(Math.random()*1000) % 10;
            y = Math.floor(Math.random()*1000) % 10;
            if (Math.floor(Math.random()*1000) % 2 === 0) ship.flip();

            fit = gameboard.shipFits(ship, x, y);    
        } while (!fit)

        gameboard.addShip(ship, x, y);
    })

    return gameboard;
}

// module.exports = Gameboard;
