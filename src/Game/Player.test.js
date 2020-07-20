import Gameboard from './gameboard';
import Player from './Player';

describe('player', () => {
	let player1, player2;
	let gb1, gb2;

	gb1 = Gameboard(); // player
	gb2 = Gameboard(); //computer
	player1 = Player('Player');
	player2 = Player('Computer');
	it('create player', () => {
		expect(player1).toEqual(
			expect.objectContaining({
				id: expect.any(String),
				attack: expect.any(Function),
				randomAttack: expect.any(Function),
			})
		);

		expect(player2.id).toEqual('Computer');
	});
	it('place ships', () => {
		gb1.autoFill();
		gb2.autoFill();
		expect(gb2.getBox('C', 1)).toEqual({
			X: 'C',
			Y: 1,
			hit: false,
			ship: expect.any(Object),
		});
		expect(gb1.getShips().length).toBe(5);
		expect(gb2.getShips().length).toBe(5);
	});

	it('random move', () => {
		const move = player2.randomAttack(gb1);
		expect(move).toBeTruthy();
	});
	it('attack C1', () => {
		expect(player1.attack(gb2, 'C', 6)).toBeTruthy();
		console.log(gb2.getBox('C', 1));
	});

	it('attack', () => {
		expect(player1.attack(gb1, 'A', 4)).toBeTruthy();
		// player1.play();
		expect(player1.attack(gb1, 'A', 3)).toBeTruthy();
		expect(player1.attack(gb1, 'A', 3)).toBeFalsy();
		expect(player1.attack(gb1, 'A', 3)).toBeFalsy();
	});
});
