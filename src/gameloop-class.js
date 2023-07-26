const Player = require('./player-class');
import { getShips } from './ship-class';

export class Gameloop {
    constructor() {
        this.turn = 0;
        this.players = [];
    }

    static setup() {
        let ships = getShips();
    }
}