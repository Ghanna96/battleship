function Ship(length, id) {
	let hp = length;

	const hit = () => {
		//mark position as "hit"
		hp--;
	};

	const isSunk = () => {
		// returns true if the ship is sunk

		return hp === 0 ? true : false;
	};
	return { length, hit, isSunk, id };
}

export default Ship;
