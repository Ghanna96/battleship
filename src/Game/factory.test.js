import Ship from './shipFactory';

describe('factory testing', () => {
	const x = Ship(3, 'boat');
	it('should return object', () => {
		expect(x).toEqual(
			expect.objectContaining({
				length: expect.any(Number),
				hit: expect.any(Function),
				isSunk: expect.any(Function),
				id: expect.any(String),
			})
		);
	});
	it('ship is sunk', () => {
		x.hit();
		x.hit();
		x.hit();

		expect(x.isSunk()).toBeTruthy();
	});
});
