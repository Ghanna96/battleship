function Player(board, id) {
	let moves = [];
	let turn = true;
	const getTurn = () => turn;
	const play = () => {
		turn = !turn;
	};
	const attack = (x, y) => {
		if (turn) {
			play();
			let result = board.receiveAttack(x, y);
			moves.push([x, y]);
			return result;
		}
		return null;
	};
	return { id, play, attack, getTurn };
}
export default Player;
