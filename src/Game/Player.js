function Player(id) {
	let moves = [];
	let turn = id === 'Player' ? true : false;

	const getTurn = () => turn;
	const play = () => {
		turn = !turn;
	};
	const randomAttack = (opponent) => {
		const moves = opponent.availableMoves();
		const length = moves.length;
		let index = Math.floor(Math.random() * length);
		const [x, y] = moves[index];
		return attack(opponent, x, y);
	};
	const attack = (opponent, x, y) => {
		play();
		let result = opponent.receiveAttack(x, y);
		moves.push([x, y]);
		return result;
	};
	return { id, play, attack, getTurn, randomAttack };
}

export default Player;
