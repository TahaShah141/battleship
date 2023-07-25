const Gameboard = require('./gameboard-class');
const Ship = require('./ship-class');

test('Makes correct board', () => {
    let n = 4;
    let gameboard = new Gameboard(n);
    expect(gameboard.board).toBeDefined();
    expect(gameboard.board.length).toBe(n);
    expect(gameboard.board[0].length).toBe(n);
})

test('Populates ship correctly', () => {
    let gameboard = new Gameboard();
    let length = 3;
    let isHorizontal = false; 
    let coordinates = {x:2, y:4};
    gameboard.addShip(length, coordinates, isHorizontal);
    expect(gameboard.ships.length).toBe(1);
    let myShip = gameboard.ships[0];
    expect(myShip.length).toBe(length);
    expect(myShip.position).toEqual(coordinates);
})

test('Gets hit', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(3, {x: 3, y: 3}, true);
    gameboard.receiveAttack({x: 3, y: 3});
    gameboard.receiveAttack({x: 5, y: 5});
    
    expect(gameboard.board[3][3]).toBe(true);
    expect(gameboard.board[5][5]).toBe(false);
    expect(gameboard.board[4][4]).toMatch(" ");
})


test('If all (one) ships sunk', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(3, {x: 3, y: 3});

    gameboard.receiveAttack({x: 3, y: 3});
    expect(gameboard.allSunk()).toBe(false);
    
    gameboard.receiveAttack({x: 4, y: 3});
    gameboard.receiveAttack({x: 5, y: 3});
    
    expect(gameboard.allSunk()).toBe(true);
})