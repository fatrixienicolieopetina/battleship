const createShip = require('../_js/ship');

let submarine = createShip(2, "VERTICAL");
let destroyer = createShip(3, "VERTICAL");
let patroller = createShip(4, "VERTICAL");
let battleship = createShip(5, "VERTICAL");
let carrier = createShip(6, "VERTICAL");

test('set correct ship type', () => {
  expect(submarine.shipType).toBe("SUBMARINE");
  expect(destroyer.shipType).toBe("DESTROYER");
  expect(patroller.shipType).toBe("PATROLLER");
  expect(battleship.shipType).toBe("BATTLESHIP");
  expect(carrier.shipType).toBe("CARRIER");
});

submarine.hit(0);
submarine.hit(1);

test('should sink ship', () => {
    expect(submarine.isSunk()).toBe(true);
});

test('should not sink ship', () => {
    expect(patroller.isSunk()).toBe(false);
});