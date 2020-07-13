function Player(id) {
	let moves = [];
	let turn = id === 'Player' ? true : false;

	const getTurn = () => turn;
	const play = () => {
		turn = !turn;
	};
	const attack = (opponent, x, y) => {
		play();
		let result = opponent.receiveAttack(x, y);
		moves.push([x, y]);
		return result;
	};
	return { id, play, attack, getTurn };
}
export default Player;
