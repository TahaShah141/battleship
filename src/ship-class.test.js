const Ship = require('./ship-class');

test("Ship object made", () => {
    let newShip = new Ship(4);
    expect(newShip).toBeDefined();
    expect(typeof(newShip)).toMatch("object");
})

test("Hit function hits", () => {
    let ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
}) 

test("isSunk function works correctly", () => {
    let ship = new Ship(4);
    expect(ship.isSunk()).toBe(false);
    for (let i = 0; i < ship.length; i++) ship.hit();
    expect(ship.isSunk()).toBe(true);
})