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
	// const getBox = (x, y) => {
	// 	const i = getIndex(x, y);
	// 	const box = getBattlefield();
	// 	return box[i];
	// };
	//place ships only horizontaly for now

	const placeShip = (ship, coord) => {
		const [x, y] = coord;
		ship.coord = coord;
		if (ship.vertical) {
			console.log(ship.id);
			//place ship vertically
			let c = x.charCodeAt(0);
			let length = ship.length;
			let box;

			for (let i = 0; i < length; i++) {
				let char = String.fromCharCode(c);
				c++;
				box = getBox(char, y);
				box.ship = ship;
				console.log(char, y);
			}
			ships.push(ship);
			return;
		}
		//place ship horizontally
		let index = getIndex(x, y);
		const length = ship.length;
		for (let i = 0; i < length; i++, index++) {
			battlefield[index].ship = ship;
		}
		ships.push(ship);
	};

	const receiveAttack = (x, y) => {
		const box = getBox(x, y);
		if (box.hit) {
			return null;
		}

		if (box.hasOwnProperty('ship')) {
			box.hit = true;
			box.ship.hit();
			return true;
		} else {
			box.hit = true;
			missedAttacks.push(box);
			return 1;
		}
	};

	const allShipsSunk = () => {
		const sunk = ships.every((x) => x.isSunk() === true);

		return sunk; // === shipCounter ? true : false;
	};
	const autoFill = () => {
		let s1 = Ship(4, 's1', false),
			s2 = Ship(2, 's2', true),
			s3 = Ship(4, 's3', true),
			s4 = Ship(1, 's4', false),
			s5 = Ship(1, 's5', false);

		placeShip(s1, ['A', 4]);
		placeShip(s2, ['C', 6]);
		placeShip(s3, ['A', 1]);
		placeShip(s4, ['D', 4]);
		placeShip(s5, ['H', 8]);
	};
	return {
		availableMoves,
		placeShip,
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
