import Gameboard from './gameboard';
import Player from './Player';

describe('player', () => {
	let player1, player2;
	let gb1, gb2;

	gb1 = Gameboard();
	gb2 = Gameboard();
	player1 = Player('Player');
	player2 = Player('Computer');
	it('create player', () => {
		expect(player1).toEqual(
			expect.objectContaining({
				id: expect.any(String),
				play: expect.any(Function),
				attack: expect.any(Function),
				getTurn: expect.any(Function),
			})
		);

		expect(player2.id).toEqual('Computer');
	});

	gb1.autoFill();
	gb2.autoFill();
	expect(gb1.getShips().length).toBe(5);
	expect(gb2.getShips().length).toBe(5);

	const whoMoves = () => {
		if (player1.getTurn()) {
			return player1;
		} else return player2;
	};

	it('turns', () => {
		expect(whoMoves()).toBe(player1);
	});
	it('attack', () => {
		expect(player1.attack(gb1, 'A', 4)).toBeTruthy();
		player1.play();
		expect(player1.attack(gb1, 'A', 3)).toBeFalsy();
	});
});
// placeShip(s1, ['A', 4]);
// 	placeShip(s2, ['C', 6]);
// 	placeShip(s3, ['A', 1]);
// 	placeShip(s4, ['D', 4]);
