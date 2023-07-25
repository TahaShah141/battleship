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

module.exports = Ship;