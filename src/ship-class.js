class Ship {
    constructor(length, x, y, horizontal=true) {
        this.length = length;
        this.hits = [];
        for (let i = 0; i < length; i++) this.hits.push(false);
        this.sunk = false;
        this.horizontal = horizontal;
        this.position = {x, y};
    }

    hit(offset) {
        this.hits[offset] = true;
    }

    isSunk() {
        for (let i = 0; i < this.hits.length; i++) if (!this.hits[i]) return false;
        return true;
    }

    collidesWith(coordinates) {
        let x = coordinates.x;
        let y = coordinates.y;

        let dx = 0;
        let dy = 0;

        let startX = this.position.x;
        let startY = this.position.y;

        if (this.horizontal) dx = 1;
        else dy = 0;

        for (let i = 0; i < this.length; i++) {
            if (startX + i*dx === x && startY + i*dy === y) return i;
        }

        return -1;
    }
}

module.exports = Ship;
