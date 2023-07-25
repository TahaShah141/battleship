const Ship = require('./ship-class')

class Gameboard {
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
        if (this.board[x][y]) this.board[x][y].hit();
        this.tries[x][y] = true;
    }

    allSunk() {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].sunk) return false;
        }
        return true;
    }
}

module.exports = Gameboard;
