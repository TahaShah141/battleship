const Ship = require('./ship-class')

class Gameboard {
    constructor(n=10) {
        this.board = this.initBoard(n);
        this.ships = [];
    }

    initBoard(n) { // " " if not interacted with, true if hit and false if missed
        let board = [];
        for (let x = 0; x < n; x++) {
            board.push([]);
            for (let y = 0; y < n; y++) {
                board[x].push(" ");
            }
        }
        return board;
    }

    addShip(length, position, isHorizontal=true) { //assumes legal parameters given
        let ship = new Ship(length, position.x, position.y, isHorizontal);
        // let dx = isHorizontal ? 1 : 0
        // let dy = isHorizontal ? 0 : 1;
        // for (let i = 0; i < this.ships.length; i++) {
        //     let s = this.ships[s];
        //     for (let offset = 0; offset < ship.length; offset++) {
        //         if (s.collidesWith({x: position.x + offset*dx, y: position.y + offset*dy}) !== -1) return;
        //     }
        // }
        this.ships.push(ship);
    }

    receiveAttack(coordinates) { //assumes coordinates are brand new
        let x = coordinates.x;
        let y = coordinates.y;

        let shipHit = false;

        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            let offset = ship.collidesWith({x, y}); 
            if (offset !== -1) {
                ship.hit(offset);
                shipHit = true;
                break;
            }
        }

        this.board[x][y] = shipHit;
    }

    allSunk() {
        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            if (!ship.isSunk()) return false;
        }
        return true;
    }
}

module.exports = Gameboard;

