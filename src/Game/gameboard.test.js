import Gameboard from './gameboard';
import Ship from './shipFactory';

const g = Gameboard();
const board = g.getBattlefield();
const ship = Ship(4, 'x');
const ship2 = Ship(2, 'z');
it('return info about boxes', () => {
	//
	expect(g.getBox('D', 3)).toEqual({
		X: 'D',
		Y: 3,

		hit: false,
	});
});

it('place ship', () => {
	g.placeShip(ship, ['B', 2]);

	expect(g.getBox('B', 4).ship).toEqual(ship);
});
it('place ship 2', () => {
	g.placeShip(ship2, ['A', 2]);
	expect(g.getBox('A', 3).ship).toEqual(ship2);
});

it('receive attack 1', () => {
	expect(g.receiveAttack('A', 2)).toBeTruthy();
	expect(g.receiveAttack('A', 3)).toBeTruthy();
	expect(g.receiveAttack('A', 4)).toBeFalsy();
	expect(g.receiveAttack('B', 8)).toBeFalsy();
});
it('check missed attacks 1', () => {
	expect(g.missed().length).toBe(2);
});

it('receive attack 2', () => {
	expect(g.receiveAttack('B', 2)).toBeTruthy();
	expect(g.receiveAttack('B', 3)).toBeTruthy();
	expect(g.receiveAttack('B', 4)).toBeTruthy();
	expect(g.receiveAttack('B', 5)).toBeTruthy();
	expect(g.receiveAttack('B', 8)).toBeFalsy();
});

it('check missed attacks 2', () => {
	expect(g.missed().length).toBe(3);
});
it('all ships are sunk', () => {
	expect(g.allShipsSunk()).toBeTruthy();
});

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
