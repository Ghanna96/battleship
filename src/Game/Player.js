function Player(id) {
	let moves = [];

	const randomAttack = (opponent) => {
		const moves = opponent.availableMoves();
		const length = moves.length;
		let index = Math.floor(Math.random() * length);
		const [x, y] = moves[index];
		return attack(opponent, x, y);
	};
	const attack = (opponent, x, y) => {
		let result = opponent.receiveAttack(x, y);
		moves.push([x, y]);
		return result;
	};
	return { id, attack, randomAttack };
}

export default Player;
