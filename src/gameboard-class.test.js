const Gameboard = require('./gameboard-class');
const Ship = require('./ship-class')

test('Ship object made', () => {
    let ship = new Ship(4, false);
    expect(typeof(ship)).toMatch("object");
    expect(ship.length).toBe(4);
})

const makeFakeBoard = () => {
    let gameboard = new Gameboard();

    let ship1 = new Ship(4);
    let ship2 = new Ship(3);

    ship2.flip();

    gameboard.addShip(ship1, 2, 2);
    gameboard.addShip(ship2, 5, 5);

    return gameboard;
}

const attackShip1 = (gameboard) => {
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 2);
    gameboard.receiveAttack(4, 2);
    gameboard.receiveAttack(5, 2);
}

const attackShip2 = (gameboard) => {
    gameboard.receiveAttack(5, 5);
    gameboard.receiveAttack(5, 6);
    gameboard.receiveAttack(5, 7);
}

test('Attacking works', () => {
    let gameboard = makeFakeBoard();
    gameboard.receiveAttack(2, 2);
    expect(gameboard.board[2][2].isHit).toBe(true);
})

test('isSunk work', () => {
    let gameboard = makeFakeBoard();
    attackShip1(gameboard);

    expect(gameboard.ships[0].sunk).toBe(true);
}) 

test('all sunk works', () => {
    let gameboard = makeFakeBoard();
    attackShip1(gameboard);
    expect(gameboard.allSunk()).toBe(false);

    attackShip2(gameboard);
    expect(gameboard.allSunk()).toBe(true);
})