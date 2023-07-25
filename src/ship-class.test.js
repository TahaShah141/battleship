const Ship = require('./ship-class');

test("Ship object made", () => {
    let newShip = new Ship(4);
    expect(newShip).toBeDefined();
    expect(typeof(newShip)).toMatch("object");
})

test("Hit function hits", () => {
    let ship = new Ship(3);
    ship.hit(0);
    expect(ship.hits[0]).toBe(true);
    expect(ship.hits[1]).toBe(false);
}) 

test("isSunk function works correctly", () => {
    let ship = new Ship(4);
    expect(ship.isSunk()).toBe(false);
    for (let i = 0; i < ship.length; i++) ship.hit(i);
    expect(ship.isSunk()).toBe(true);
})

test("isSunk test 2", () => {
    let ship = new Ship(3);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
})