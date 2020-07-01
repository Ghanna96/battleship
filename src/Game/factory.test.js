import Ship from './shipFactory';

describe('factory testing', () => {
	const x = Ship(3, 'boat');

	it('ship is sunk', () => {
		x.hit();
		x.hit();
		x.hit();

		expect(x.isSunk()).toBeTruthy();
	});
});
