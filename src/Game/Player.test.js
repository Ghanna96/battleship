import Gameboard from './gameboard';
import Player from './Player';

describe('player', () => {
	let player1, player2;
	let gb1, gb2;

	gb1 = Gameboard();
	gb2 = Gameboard();
	player1 = Player(gb2, 'player1');
	player2 = Player(gb1, 'computer');
	player2.play();
	it('create player', () => {
		expect(player1.id).toEqual('player1');
		expect(player2.id).toEqual('computer');
	});

	gb1.placeDefaultShips();
	gb2.placeDefaultShips();
	expect(gb1.getShips().length).toBe(4);
	expect(gb2.getShips().length).toBe(4);

	const whoMoves = () => {
		if (player1.getTurn()) {
			return player1;
		} else return player2;
	};
	it('turns', () => {
		expect(whoMoves()).toBe(player1);
	});
	it('attack', () => {
		expect(player1.attack('A', 4)).toBeTruthy();
		player1.play();
		expect(player1.attack('A', 3)).toBeFalsy();
	});
});
// placeShip(s1, ['A', 4]);
// 	placeShip(s2, ['C', 6]);
// 	placeShip(s3, ['A', 1]);
// 	placeShip(s4, ['D', 4]);
