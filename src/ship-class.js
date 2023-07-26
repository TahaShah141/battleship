class Ship {
    constructor(length, isHorizontal=true) {
        this.length = length;
        this.segments = [];
        this.horizontal = isHorizontal;
        this.sunk = false;  
    }

    isSunk() {
        for (let i = 0; i < this.segments.length; i++) if (!this.segments[i].isHit) return false;
        return true;
    }

    flip() {
        this.horizontal = !this.horizontal;
    }

    addSegment(x, y) {
        let seg = new Segment(this, x, y);
        this.segments.push(seg);

        return seg;
    }
}

class Segment {
    constructor(ship, x, y) {
        this.isHit = false;
        this.x = x;
        this.y = y;
        this.parent = ship;
    }

    hit() {
        this.isHit = true;
        this.parent.sunk = this.parent.isSunk();
    }
}


export function getShips() {
    let ships = [];
    for (let count = 1; count <= 4; count++)
    for (let i = 0; i < count; i++) 
    ships.push(new Ship(5-count));
    return ships;
}

export default {Ship};