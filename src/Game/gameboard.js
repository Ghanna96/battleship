import Ship from './shipFactory';
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
	const getShips = () => ships;
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
				return 0;
			}
		} else {
			box.hit = true;
			missedAttacks.push(box);
			return false;
		}
	};

	const allShipsSunk = () => {
		const sunk = ships.every((x) => x.isSunk() === true);

		return sunk; // === shipCounter ? true : false;
	};
	const placeDefaultShips = () => {
		let s1 = Ship(4, 's1'),
			s2 = Ship(3, 's2'),
			s3 = Ship(2, 's3'),
			s4 = Ship(1, 's4');
		placeShip(s1, ['A', 4]);
		placeShip(s2, ['C', 6]);
		placeShip(s3, ['A', 1]);
		placeShip(s4, ['D', 4]);
	};
	return {
		placeShip,
		getBattlefield,
		receiveAttack,
		getBox,
		missed,
		allShipsSunk,
		placeDefaultShips,
		getShips,
	};
}

export default Gameboard;
