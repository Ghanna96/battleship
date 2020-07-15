import React, { Component } from 'react';
import Gameboard from '../Game/gameboard';
import Player from '../Game/Player';
import styled from 'styled-components';
import Board from './Board';
import CpuBoard from './CpuBoard';

const Battelfields = styled.div`
	width: 100%;
	padding-top: 110px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	overflow: hidden;
`;

class Battleship extends Component {
	state = {
		pBoard: Gameboard(),
		cBoard: Gameboard(),
		player: Player('player'),
		computer: Player('computer'),
	};
	attackBoard = (x, y, board) => {
		let bf = Object.assign({}, board);
		this.state.player.attack(bf, x, y);
		this.setState({ cBoard: bf });
		console.log(bf.getBox(x, y));
	};
	componentWillMount() {
		console.log('use effect');
		let p = this.state.pBoard;
		let c = this.state.cBoard;
		p.autoFill();
		c.autoFill();
		this.setState({ pBoard: p });
		this.setState({ cBoard: c });
	}
	render() {
		return (
			<Battelfields>
				<Board board={this.state.pBoard}></Board>
				<CpuBoard
					board={this.state.cBoard}
					attack={this.attackBoard}></CpuBoard>
			</Battelfields>
		);
	}
}

export default Battleship;

// export default function Battleship() {
// 	const [pBoard, setBoard1] = useState(Gameboard()); //player
// 	const [cBoard, setBoard2] = useState(Gameboard()); //computer
// 	const player = Player('player');
// 	const computer = Player('computer');

// 	const attackBoard = (x, y, board) => {
// 		let bf = Object.assign({}, board);
// 		player.attack(bf, x, y);
// 		setBoard2(bf);
// 		console.log(bf.getBox(x, y));
// 	};
// 	useEffect(() => {
// 		console.log('use effect');
// 		let p = pBoard;
// 		let c = cBoard;
// 		p.autoFill();
// 		c.autoFill();
// 		setBoard1(p);
// 		setBoard2(c);
// 	}, []);
// 	// console.log('App');
// 	return (
// 		<Battelfields>
// 			<Board board={pBoard}></Board>
// 			<CpuBoard board={cBoard} attack={attackBoard}></CpuBoard>
// 		</Battelfields>
// 	);
