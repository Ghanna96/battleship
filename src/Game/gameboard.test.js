import Gameboard from './gameboard';
import Ship from './shipFactory';

const g = Gameboard();
const ship = Ship(4, 'x', ['B', 2]);
const ship2 = Ship(2, 'z', ['A', 2]);
it('return info about boxes', () => {
	//
	expect(g.getBox('D', 3)).toEqual({
		X: 'D',
		Y: 3,
		ship: null,
		hit: false,
		index: [3, 2],
	});
});

it('place ship', () => {
	g.addShip(ship);
	g.placeShips();
	expect(g.getBox('B', 4).ship).toEqual(ship);
	expect(g.canPlaceShip(ship, 'B', 3)).toBeFalsy();
});

it('place ship 2', () => {
	expect(g.canPlaceShip(ship2, 'A', 3)).toBeTruthy();
	g.addShip(ship2);
	g.placeShips();
	expect(g.getBox('A', 3).ship).toEqual(ship2);
});

it('receive attack 1', () => {
	expect(g.receiveAttack('A', 2)).toBeTruthy();
	expect(g.receiveAttack('A', 3)).toBeTruthy();
	expect(g.receiveAttack('A', 4)).toBeTruthy();
	expect(g.receiveAttack('A', 4)).toBeFalsy();
	expect(g.receiveAttack('A', 8)).toBeTruthy();
});
it('check missed attacks 1', () => {
	expect(g.missed().length).toBe(2);
});

it('receive attack 2', () => {
	expect(g.receiveAttack('B', 2)).toBeTruthy();
	expect(g.receiveAttack('B', 3)).toBeTruthy();
	expect(g.receiveAttack('B', 4)).toBeTruthy();
	expect(g.receiveAttack('B', 5)).toBeTruthy();
	expect(g.receiveAttack('B', 8)).toBeTruthy();
	expect(g.receiveAttack('B', 2)).toBeFalsy();
});

it('check missed attacks 2', () => {
	expect(g.missed().length).toBe(3);
});
it('all ships are sunk', () => {
	expect(g.allShipsSunk()).toBeTruthy();
	console.log(g.availableMoves().length);
});
it('move ship', () => {
	g.moveShip(ship, 'H', 5);
	expect(g.getBox('H', 5).ship).toEqual(ship);
});
// it('check valid move');

// g.receiveAttack('B', 2);
// g.receiveAttack('B', 3);
// g.receiveAttack('B', 4);
// g.receiveAttack('B', 5);
// g.receiveAttack('B', 6);
// g.receiveAttack('A', 2);
// g.receiveAttack('A', 3);
// it('sunk ship', () => {
// 	const x = g.getBox('B', 3);
// 	expect(x.ship.isSunk()).toBeTruthy();
// 	expect(x.ship.showHp()).toBe(0);
// });

// it('all ships sunk', () => {
// 	expect(g.allShipsSunk()).toBeTruthy();
// 	console.log(g.allShipsSunk());
// });
