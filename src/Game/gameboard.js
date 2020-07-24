import Ship from './shipFactory';
function createBoard() {
	const board = [];
	for (let i = 0; i < 10; i++) {
		let xAxis = String.fromCharCode(65 + i);

		for (let j = 0; j < 10; j++) {
			board.push({ index: [i, j], X: xAxis, Y: j + 1, hit: false, ship: null });
		}
	}
	return board;
}

function Gameboard() {
	let battlefield = createBoard();
	const missedAttacks = [];
	const availableMoves = () =>
		battlefield
			.filter((b) => !b.hit)
			.reduce((arr, b) => {
				arr.push([b.X, b.Y]);
				return arr;
			}, []);

	let ships = [];
	const getShips = () => ships;
	const getIndex = (x, y) =>
		battlefield.findIndex((el) => el.X === x && el.Y === y);
	const getBattlefield = () => battlefield;
	const missed = () => missedAttacks;
	const getBox = (x, y) => battlefield.find((o) => o.X === x && o.Y === y);
	const addShip = (ship) => {
		ships.push(ship);
	};
	//reset the ship prop to null
	const resetShips = () => {
		let freshBoard = battlefield.map((cell) => {
			cell.ship = null;
			return cell;
		});
		battlefield = freshBoard;
	};
	const moveShip = (ship, x, y) => {
		ship.coords = [x, y];
		placeShips();
	};
	//loop through ship arr and place ships on board
	const placeShips = () => {
		resetShips();
		ships.forEach((s) => {
			const [x, y] = s.coords;
			//place ship vertically
			if (s.vertical) {
				let c = x.charCodeAt(0);
				let length = s.length;
				let box;

				for (let i = 0; i < length; i++) {
					let char = String.fromCharCode(c);
					c++;
					box = getBox(char, y);
					box.ship = s;
				}
			} else {
				//place ship horizontally
				let index = getIndex(x, y);

				for (let i = 0; i < s.length; i++, index++) {
					battlefield[index].ship = s;
				}
			}
		});
	};
	const receiveAttack = (x, y) => {
		const box = getBox(x, y);
		if (box.hit) {
			return null;
		}

		if (box.ship) {
			box.hit = true;
			box.ship.hit();
			return true;
		} else {
			box.hit = true;
			missedAttacks.push(box);
			return 1;
		}
	};
	const canPlaceShip = (s, x, y) => {
		const { length, vertical, id } = s;
		if (vertical) {
			let c = x.charCodeAt(0);
			let box;
			if (c + length > 75) {
				return false;
			}
			for (let i = 0; i < length; i++) {
				let char = String.fromCharCode(c);
				c++;
				box = getBox(char, y);

				if (box.ship && box.ship.id !== id) {
					return false;
				}
			}

			return true;
		} else {
			if (y + length > 11) {
				return false;
			}
			for (let i = 0; i < length; i++) {
				let c = y + i;
				let box = getBox(x, c);
				if (box.ship && box.ship.id !== id) {
					return false;
				}
			}
			return true;
		}
	};
	const allShipsSunk = () => {
		const sunk = ships.every((x) => x.isSunk() === true);

		return sunk; // === shipCounter ? true : false;
	};
	const autoFill = () => {
		let newShips = [
			Ship(4, 's1', ['A', 4], false),
			Ship(2, 's2', ['C', 6], true),
			Ship(4, 's3', ['A', 1], true),
			Ship(1, 's4', ['D', 4], false),
			Ship(1, 's5', ['G', 4], false),
		];
		newShips.forEach((s) => {
			addShip(s);
		});
		placeShips();
	};
	return {
		canPlaceShip,
		moveShip,
		availableMoves,
		addShip,
		placeShips,
		getBattlefield,
		receiveAttack,
		getBox,
		missed,
		allShipsSunk,
		autoFill,
		getShips,
	};
}

export default Gameboard;
