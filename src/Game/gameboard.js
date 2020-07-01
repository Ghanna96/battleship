function createBoard() {
	const board = [];
	for (let i = 0; i < 10; i++) {
		let xAxis = String.fromCharCode(65 + i);

		for (let j = 1; j <= 10; j++) {
			board.push({ X: xAxis, Y: j, hit: false });
		}
	}
	return board;
}

function Gameboard() {
	const battlefield = createBoard();
	const missedAttacks = [];
	let ships = [];
	const getIndex = (x, y) =>
		battlefield.findIndex((el) => el.X === x && el.Y === y);
	const getBattlefield = () => battlefield;
	const missed = () => missedAttacks;
	const getBox = (x, y) => {
		const i = getIndex(x, y);
		const box = getBattlefield();
		return box[i];
	};
	//place ships only horizontaly for now
	const placeShip = (ship, coord) => {
		const [x, y] = coord;
		let index = getIndex(x, y);
		const length = ship.length;
		for (let i = 0; i < length; i++, index++) {
			battlefield[index].ship = ship;
		}
		ships.push(ship);
	};

	const receiveAttack = (x, y) => {
		const box = getBox(x, y);
		if (box.hasOwnProperty('ship')) {
			if (!box.hit) {
				box.hit = true;
				box.ship.hit();
				return true;
			} else {
				return false;
			}
		} else {
			box.hit = true;
			missedAttacks.push(box);
			return 0;
		}
	};

	const allShipsSunk = () => {
		const sunk = ships.every((x) => x.isSunk() === true);

		return sunk; // === shipCounter ? true : false;
	};
	return {
		placeShip,
		getBattlefield,
		receiveAttack,
		getBox,
		missed,
		allShipsSunk,
		ships,
	};
}

export default Gameboard;
